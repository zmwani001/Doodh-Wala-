export type PlanFrequency = 'daily' | 'alternate' | 'monthly';

export type PackagingType = 'glass' | 'pouch';

export interface SubscriptionConfig {
  frequency: PlanFrequency;
  litres: number;
  packaging: PackagingType;
}

export interface TestParameter {
  name: string;
  expected: string;
  result: string;
  status: 'passed' | 'warning';
}

export interface LabBatchReport {
  batchId: string;
  date: string;
  milkingTime: string;
  testingTime: string;
  fatContent: string;
  snfContent: string;
  temperatureAtDispatch: string;
  waterAdulteration: string;
  starchUreaDetergent: string;
  microbialQuality: string;
  chemistName: string;
  signatureVerified: boolean;
  parameters: TestParameter[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  avatarText: string;
  comment: string;
  subscriptionType: string;
  date: string;
}

export interface CoverageZone {
  name: string;
  pincode: string;
  status: 'active' | 'scheduled' | 'expanding';
  deliveryWindow: string;
  hub: string;
}
