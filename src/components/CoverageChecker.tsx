import React, { useCallback, useEffect, useRef, useState } from 'react';
import { COVERAGE_ZONES } from '../data/mockData';

interface PostalOffice {
  Name: string;
  District: string;
  State: string;
  Country: string;
  Pincode: string;
}

type LookupState =
  | { status: 'idle' | 'loading' }
  | { status: 'success'; offices: PostalOffice[] }
  | { status: 'error'; message: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isPostalOffice = (value: unknown): value is PostalOffice => {
  if (!isRecord(value)) return false;

  return [
    'Name',
    'District',
    'State',
    'Country',
    'Pincode',
  ].every((key) => typeof value[key] === 'string');
};

const getRouteStatus = (pincode: string): 'active' | 'expanding' | 'unlisted' => {
  const matchingZones = COVERAGE_ZONES.filter((zone) => zone.pincode === pincode);
  if (matchingZones.some((zone) => zone.status === 'active')) return 'active';
  if (matchingZones.some((zone) => zone.status === 'expanding')) return 'expanding';
  return 'unlisted';
};

export const CoverageChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [lookupState, setLookupState] = useState<LookupState>({ status: 'idle' });
  const activeRequest = useRef<AbortController | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lookupLocation = useCallback(async (value: string, showValidation = true) => {
    const query = value.trim();
    if (!query) {
      setLookupState({ status: 'idle' });
      return;
    }

    const isPincode = /^\d+$/.test(query);
    if (isPincode && !/^\d{6}$/.test(query)) {
      setLookupState(showValidation
        ? { status: 'error', message: 'Enter a valid 6-digit PIN code.' }
        : { status: 'idle' });
      return;
    }
    if (!isPincode && query.length < 2) {
      setLookupState(showValidation
        ? { status: 'error', message: 'Enter at least 2 letters of a locality name.' }
        : { status: 'idle' });
      return;
    }

    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setLookupState({ status: 'loading' });

    try {
      const searchType = isPincode ? 'pincode' : 'postoffice';
      const response = await fetch(
        `https://api.postalpincode.in/${searchType}/${encodeURIComponent(query)}`,
        { signal: controller.signal },
      );

      if (!response.ok) {
        throw new Error('Postal lookup is temporarily unavailable. Please try again.');
      }

      const payload: unknown = await response.json();
      if (!Array.isArray(payload) || !isRecord(payload[0])) {
        throw new Error('The postal service returned an unexpected response.');
      }

      const result = payload[0];
      if (result.Status !== 'Success') {
        setLookupState({ status: 'success', offices: [] });
        return;
      }
      if (!Array.isArray(result.PostOffice)) {
        throw new Error('The postal service returned an unexpected response.');
      }

      const offices = result.PostOffice.filter(isPostalOffice);
      setLookupState({ status: 'success', offices });
    } catch (error) {
      if (controller.signal.aborted) return;
      setLookupState({
        status: 'error',
        message: error instanceof Error
          ? error.message
          : 'Postal lookup failed. Please try again.',
      });
    }
  }, []);

  useEffect(() => {
    const query = searchTerm.trim();
    const isPincode = /^\d+$/.test(query);
    if (!query || (isPincode && query.length !== 6) || (!isPincode && query.length < 2)) {
      setLookupState({ status: 'idle' });
      return;
    }

    const timer = setTimeout(() => {
      void lookupLocation(query, false);
    }, 450);
    debounceTimer.current = timer;

    return () => {
      clearTimeout(timer);
      activeRequest.current?.abort();
    };
  }, [lookupLocation, searchTerm]);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    void lookupLocation(searchTerm);
  };

  const handleSectorClick = (sectorName: string) => {
    setSearchTerm(sectorName);
    setLookupState({ status: 'idle' });
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    void lookupLocation(sectorName);
  };

  return (
    <section className="scroll-mt-20 bg-[#e9e9df] py-12 text-[#26372a] sm:py-16" id="delivery">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Delivery Info */}
          <div className="space-y-5 lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64755e]">Delivery</span>

            <h2 className="font-display-hero text-3xl font-semibold leading-tight text-[#233d2d] sm:text-4xl">
              Check your delivery area.
            </h2>

            <p className="text-[14px] leading-relaxed text-[#5d6258]">
              Morning delivery is available in listed areas across Baramulla, Kreeri and Sopore. Search your locality or PIN code for current route information.
            </p>

            <div className="border-t border-[#c6ccbd] pt-4 text-[13px] text-[#53634f]">
              <span className="font-semibold text-[#344136]">Farm:</span> Kreeri, Baramulla, Kashmir
            </div>
          </div>

          {/* Interactive Pin / Locality Checker */}
          <div className="lg:col-span-7">
            <div className="border border-[#d0d4c9] bg-[#fbf9f5] p-5 sm:p-7">
              <h3 className="font-display-hero text-xl font-semibold text-[#233d2d]">
                Find a route
              </h3>
              <p className="mb-5 mt-1 text-[13px] text-[#5d6258]">
                Enter a locality or 6-digit PIN code to look up its postal address and delivery availability.
              </p>

              <form onSubmit={handleCheck} className="space-y-4">
                <div>
                  <label htmlFor="locality-input" className="mb-2 block text-[12px] font-semibold text-[#455145]">
                    Locality or PIN code
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="locality-input"
                      type="text"
                      required
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setLookupState({ status: 'idle' });
                        activeRequest.current?.abort();
                      }}
                      autoComplete="off"
                      placeholder="e.g. Baramulla or 193101"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-[14px] border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f]"
                    />
                    <button
                      type="submit"
                      className="min-h-11 shrink-0 rounded-md bg-[#233d2d] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#38553d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f]"
                    >
                      Check
                    </button>
                  </div>
                </div>

                {lookupState.status === 'loading' && (
                  <div
                    aria-live="polite"
                    className="flex items-center gap-3 rounded-2xl border border-[#d0d4c9] bg-white p-4 text-[13px] text-[#5d6258]"
                  >
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#aab99f] border-t-[#233d2d]" aria-hidden="true" />
                    <span>Finding matching locations…</span>
                  </div>
                )}
                {lookupState.status === 'error' && (
                  <div role="alert" className="rounded-2xl border border-[#d7c9a7] bg-[#f5f0e4] p-4 text-[13px] text-[#483b24]">
                    {lookupState.message}
                  </div>
                )}
                {lookupState.status === 'success' && (
                  <div aria-live="polite" className="space-y-3">
                    {lookupState.offices.length === 0 ? (
                      <div className="rounded-2xl border border-[#d7c9a7] bg-[#f5f0e4] p-4 text-[13px] text-[#483b24]">
                        No postal locations found. Check the spelling or PIN code and try again.
                      </div>
                    ) : (
                      <>
                        <p className="text-[12px] font-semibold text-[#455145]">
                          {lookupState.offices.length} postal {lookupState.offices.length === 1 ? 'location' : 'locations'} found
                        </p>
                        <div className="coverage-results-scroll space-y-2 pr-2">
                          {lookupState.offices.map((office) => {
                            const routeStatus = getRouteStatus(office.Pincode);

                            return (
                              <article
                                key={`${office.Pincode}-${office.Name}`}
                                className="rounded-xl border border-[#e1e4da] bg-white p-4 text-[#26372a] shadow-sm transition-colors hover:border-[#aab99f]"
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <h4 className="font-semibold text-[#233d2d]">{office.Name}</h4>
                                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                    routeStatus === 'active'
                                      ? 'bg-[#e7f0e1] text-[#344f35]'
                                      : routeStatus === 'expanding'
                                        ? 'bg-[#f5edda] text-[#6a5529]'
                                        : 'bg-[#f1f1ed] text-[#62665e]'
                                  }`}>
                                    {routeStatus === 'active'
                                      ? 'Delivery available'
                                      : routeStatus === 'expanding'
                                        ? 'Route expanding'
                                        : 'Not on a listed route'}
                                  </span>
                                </div>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-[#62665e]">
                                  {office.District}, {office.State}, {office.Country}
                                </p>
                                <p className="mt-2 text-[11px] font-semibold tracking-wide text-[#53634f]">
                                  PIN {office.Pincode}
                                </p>
                                {routeStatus === 'expanding' && (
                                  <p className="mt-2 text-[12px] text-[#5d6258]">
                                    Contact us on WhatsApp to ask about availability.
                                  </p>
                                )}
                                {routeStatus === 'unlisted' && (
                                  <p className="mt-2 text-[12px] text-[#5d6258]">
                                    We can’t confirm delivery here yet. <a className="font-semibold underline underline-offset-2" href="https://wa.me/919906000000" target="_blank" rel="noopener noreferrer">Ask us on WhatsApp.</a>
                                  </p>
                                )}
                              </article>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </form>

              {/* Popular Verified Sectors Chips */}
              {/* <div className="mt-5 border-t border-[#d8dbcf] pt-4">
                <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#66705f]">
                  Common areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Baramulla Old Town',
                    'Kanispora',
                    'Delina',
                    'Kreeri Proper',
                    'Sopore Town & Model Town',
                  ].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => handleSectorClick(sec)}
                      className="min-h-9 rounded-md border border-[#d8dbcf] bg-white px-3 py-1.5 text-[12px] font-medium text-[#344136] transition-colors hover:bg-[#edf1e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f]"
                    >
                      {sec}
                    </button>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
