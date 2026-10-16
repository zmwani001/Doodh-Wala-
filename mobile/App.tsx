import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Droplets,
  FlaskConical,
  House,
  Leaf,
  MapPin,
  Milk,
  PackageCheck,
  ShieldCheck,
  ShoppingBasket,
  UserRound,
} from 'lucide-react-native';

type Tab = 'home' | 'plans' | 'quality' | 'account';
type Frequency = 'Daily' | 'Alternate days';

const palette = {
  ink: '#21352A',
  muted: '#6E796E',
  paper: '#F7F6F0',
  white: '#FFFFFF',
  green: '#315B42',
  lightGreen: '#E7EDE3',
  lime: '#D6E8A0',
  line: '#E7E8DF',
  orange: '#B8653B',
};

const benefits = [
  { icon: Leaf, title: 'Farm fresh', detail: 'From Kreeri, Kashmir' },
  { icon: ShieldCheck, title: 'Lab tested', detail: 'Every morning batch' },
  { icon: PackageCheck, title: 'At your door', detail: 'Before your day begins' },
];

function ActionButton({
  label,
  onPress,
  secondary = false,
}: {
  label: string;
  onPress: () => void;
  secondary?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        secondary && styles.secondaryButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.actionButtonText, secondary && styles.secondaryButtonText]}>{label}</Text>
      <ArrowRight size={17} color={secondary ? palette.green : palette.white} />
    </Pressable>
  );
}

function HomeScreen({
  onChoosePlan,
  onCheckArea,
  wide,
}: {
  onChoosePlan: () => void;
  onCheckArea: () => void;
  wide: boolean;
}) {
  return (
    <ScrollView contentContainerStyle={[styles.page, wide && styles.widePage]} showsVerticalScrollIndicator={false}>
      <View style={styles.topline}>
        <View style={styles.brandLockup}>
          <View style={styles.brandMark}><Milk size={22} color={palette.white} /></View>
          <View>
            <Text style={styles.brandName}>meadow</Text>
            <Text style={styles.brandCaption}>MILK FROM KREERI</Text>
          </View>
        </View>
        <Pressable onPress={onCheckArea} style={styles.locationButton} accessibilityRole="button">
          <MapPin size={16} color={palette.green} />
          <View style={styles.locationCopy}>
            <Text style={styles.eyebrow}>DELIVERING TO</Text>
            <Text style={styles.locationName}>Baramulla <ChevronDown size={12} color={palette.ink} /></Text>
          </View>
        </Pressable>
      </View>

      <ImageBackground
        source={require('./assets/Gemini_Generated_Image_djvuzidjvuzidjvu.png')}
        imageStyle={styles.heroImage}
        style={[styles.hero, wide && styles.wideHero]}
        resizeMode="cover"
      >
        <View style={styles.heroShade} />
        <View style={styles.heroContent}>
          <View style={styles.freshPill}>
            <View style={styles.freshDot} />
            <Text style={styles.freshText}>FRESH FROM THE VALLEY</Text>
          </View>
          <Text style={styles.heroTitle}>A little{ '\n' }closer to{ '\n' }the meadow.</Text>
          <Text style={styles.heroSubtitle}>Pure, unhomogenized cow milk.{ '\n' }At your doorstep by morning.</Text>
          <Pressable onPress={onChoosePlan} style={({ pressed }) => [styles.heroButton, pressed && styles.pressed]}>
            <Text style={styles.heroButtonText}>Build your milk plan</Text>
            <ArrowDownRight size={17} color={palette.ink} />
          </Pressable>
        </View>
        <View style={styles.heroNote}>
          <Text style={styles.heroNoteNumber}>01</Text>
          <Text style={styles.heroNoteText}>Grown with care{ '\n' }in the Kashmir valley</Text>
        </View>
      </ImageBackground>

      <View style={[styles.benefitRow, wide && styles.wideBenefitRow]}>
        {benefits.map(({ icon: Icon, title, detail }) => (
          <View key={title} style={styles.benefitItem}>
            <View style={styles.benefitIcon}><Icon size={18} color={palette.green} /></View>
            <View style={styles.benefitCopy}>
              <Text style={styles.benefitTitle}>{title}</Text>
              <Text style={styles.benefitDetail}>{detail}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={[styles.sectionHeading, wide && styles.sectionHeadingWide]}>
        <View>
          <Text style={styles.eyebrow}>YOUR MORNING, SORTED</Text>
          <Text style={styles.sectionTitle}>Good milk. No guesswork.</Text>
        </View>
        <Text style={styles.sectionAside}>01 / 03</Text>
      </View>
      <View style={[styles.promiseGrid, wide && styles.widePromiseGrid]}>
        <View style={styles.promiseCard}>
          <View style={styles.promiseNumberRow}><Text style={styles.promiseNumber}>01</Text><Droplets size={19} color={palette.orange} /></View>
          <Text style={styles.promiseTitle}>Naturally rich</Text>
          <Text style={styles.promiseBody}>Whole milk, gently handled. Nothing added, nothing taken away.</Text>
        </View>
        <View style={[styles.promiseCard, styles.promiseCardGreen]}>
          <View style={styles.promiseNumberRow}><Text style={styles.promiseNumber}>02</Text><Clock3 size={19} color={palette.green} /></View>
          <Text style={styles.promiseTitle}>A calmer start</Text>
          <Text style={styles.promiseBody}>A dependable doorstep delivery, timed around your mornings.</Text>
        </View>
      </View>

      <Pressable onPress={onCheckArea} style={styles.areaBanner}>
        <View style={styles.areaIcon}><MapPin size={20} color={palette.green} /></View>
        <View style={styles.areaCopy}>
          <Text style={styles.areaTitle}>Is Meadow on your route?</Text>
          <Text style={styles.areaDescription}>Check delivery in your neighbourhood</Text>
        </View>
        <ArrowRight size={19} color={palette.green} />
      </Pressable>
      <Text style={styles.footerNote}>FRESHNESS, WITH A SENSE OF PLACE.  ·  KREERI, KASHMIR</Text>
    </ScrollView>
  );
}

function PlansScreen({
  litres,
  setLitres,
  frequency,
  setFrequency,
  onSubscribe,
  wide,
}: {
  litres: number;
  setLitres: (litres: number) => void;
  frequency: Frequency;
  setFrequency: (frequency: Frequency) => void;
  onSubscribe: () => void;
  wide: boolean;
}) {
  const amount = Math.round(litres * (frequency === 'Daily' ? 68 : 34) * 30);
  return (
    <ScrollView contentContainerStyle={[styles.page, wide && styles.widePage]} showsVerticalScrollIndicator={false}>
      <View style={styles.screenHeader}>
        <Text style={styles.eyebrow}>MADE FOR YOUR HOUSEHOLD</Text>
        <Text style={styles.screenTitle}>Your milk, your rhythm.</Text>
        <Text style={styles.screenDescription}>A flexible delivery plan, freshly prepared each morning.</Text>
      </View>
      <View style={[styles.planPanel, wide && styles.widePlanPanel]}>
        <View style={styles.planTopline}>
          <View><Text style={styles.eyebrow}>MEADOW WHOLE MILK</Text><Text style={styles.planHeading}>Build your plan</Text></View>
          <View style={styles.planMilkIcon}><Milk size={22} color={palette.green} /></View>
        </View>
        <Text style={styles.fieldLabel}>HOW OFTEN?</Text>
        <View style={styles.segmentRow}>
          {(['Daily', 'Alternate days'] as Frequency[]).map((option) => (
            <Pressable key={option} onPress={() => setFrequency(option)} style={[styles.segment, frequency === option && styles.segmentSelected]}>
              <Text style={[styles.segmentText, frequency === option && styles.segmentTextSelected]}>{option}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.fieldLabel}>HOW MUCH PER DELIVERY?</Text>
        <View style={styles.quantityRow}>
          {[0.5, 1, 1.5, 2].map((quantity) => (
            <Pressable key={quantity} onPress={() => setLitres(quantity)} style={[styles.quantityButton, litres === quantity && styles.quantitySelected]}>
              <Text style={[styles.quantityValue, litres === quantity && styles.quantityTextSelected]}>{quantity}</Text>
              <Text style={[styles.quantityUnit, litres === quantity && styles.quantityTextSelected]}>litre{quantity !== 1 ? 's' : ''}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.planDivider} />
        <View style={styles.planSummary}>
          <View><Text style={styles.summaryLabel}>ESTIMATED MONTHLY TOTAL</Text><Text style={styles.summaryCaption}>Billed monthly · pause whenever</Text></View>
          <Text style={styles.summaryAmount}>₹{amount.toLocaleString('en-IN')}</Text>
        </View>
        <ActionButton label="Start my subscription" onPress={onSubscribe} />
        <Text style={styles.planFootnote}>Reusable glass bottles · Morning doorstep delivery</Text>
      </View>
      <View style={styles.deliveryNote}>
        <CircleCheck size={20} color={palette.green} />
        <Text style={styles.deliveryNoteText}>Your plan is flexible. Skip a day or pause your deliveries whenever you need.</Text>
      </View>
    </ScrollView>
  );
}

function QualityScreen({ wide }: { wide: boolean }) {
  const checks = [
    ['Milk fat', '4.15%', 'Within range'],
    ['Solids-not-fat', '8.82%', 'Within range'],
    ['Added water', '0.00%', 'Not detected'],
    ['Cold-chain temp.', '3.6°C', 'Maintained'],
  ];
  return (
    <ScrollView contentContainerStyle={[styles.page, wide && styles.widePage]} showsVerticalScrollIndicator={false}>
      <View style={styles.screenHeader}>
        <Text style={styles.eyebrow}>OPEN BOOK, EVERY BATCH</Text>
        <Text style={styles.screenTitle}>Goodness you can see.</Text>
        <Text style={styles.screenDescription}>A fresh quality check happens before the morning route leaves the farm.</Text>
      </View>
      <View style={styles.labCard}>
        <View style={styles.labHeader}>
          <View style={styles.labIcon}><FlaskConical size={21} color={palette.green} /></View>
          <View style={styles.labHeading}><Text style={styles.eyebrow}>LATEST FARM REPORT</Text><Text style={styles.labBatch}>Batch KM-0925-A</Text></View>
          <View style={styles.verified}><Check size={12} color={palette.white} /><Text style={styles.verifiedText}>PASSED</Text></View>
        </View>
        <Text style={styles.labDate}>Kreeri on-site laboratory  ·  Sep 25, 2026</Text>
        <View style={styles.labRule} />
        {checks.map(([label, value, status]) => (
          <View key={label} style={styles.checkRow}>
            <Text style={styles.checkLabel}>{label}</Text>
            <Text style={styles.checkValue}>{value}</Text>
            <View style={styles.checkStatus}><CircleCheck size={14} color={palette.green} /><Text style={styles.checkStatusText}>{status}</Text></View>
          </View>
        ))}
      </View>
      <View style={styles.transparencyNote}>
        <ShieldCheck size={21} color={palette.green} />
        <View style={styles.transparencyCopy}><Text style={styles.transparencyTitle}>Nothing to hide.</Text><Text style={styles.transparencyBody}>Every batch is screened for purity and temperature before bottling.</Text></View>
      </View>
    </ScrollView>
  );
}

function AccountScreen({ onCheckArea, wide }: { onCheckArea: () => void; wide: boolean }) {
  return (
    <ScrollView contentContainerStyle={[styles.page, wide && styles.widePage]} showsVerticalScrollIndicator={false}>
      <View style={styles.screenHeader}>
        <Text style={styles.eyebrow}>A GOOD MORNING STARTS HERE</Text>
        <Text style={styles.screenTitle}>Your Meadow.</Text>
        <Text style={styles.screenDescription}>Your deliveries, your place, your pace.</Text>
      </View>
      <View style={styles.accountProfile}>
        <View style={styles.profileAvatar}><UserRound size={27} color={palette.green} /></View>
        <View style={styles.profileCopy}><Text style={styles.profileTitle}>Welcome to Meadow</Text><Text style={styles.profileDetail}>Your milk routine, made simple.</Text></View>
      </View>
      <Pressable onPress={onCheckArea} style={styles.accountRow}>
        <View style={styles.accountRowIcon}><MapPin size={19} color={palette.green} /></View>
        <View style={styles.accountRowCopy}><Text style={styles.accountRowTitle}>Delivery address</Text><Text style={styles.accountRowDetail}>Baramulla, Kashmir</Text></View>
        <ArrowRight size={17} color={palette.muted} />
      </Pressable>
      <View style={styles.accountRow}>
        <View style={styles.accountRowIcon}><ShoppingBasket size={19} color={palette.green} /></View>
        <View style={styles.accountRowCopy}><Text style={styles.accountRowTitle}>Your subscription</Text><Text style={styles.accountRowDetail}>Choose a plan that fits</Text></View>
        <ArrowRight size={17} color={palette.muted} />
      </View>
      <View style={styles.accountRow}>
        <View style={styles.accountRowIcon}><House size={19} color={palette.green} /></View>
        <View style={styles.accountRowCopy}><Text style={styles.accountRowTitle}>A little about us</Text><Text style={styles.accountRowDetail}>From our farm in Kreeri</Text></View>
        <ArrowRight size={17} color={palette.muted} />
      </View>
      <View style={styles.accountQuote}><Text style={styles.quoteMark}>“</Text><Text style={styles.quoteText}>A closer connection between the farm and your family table.</Text><Text style={styles.quoteAttribution}>THE MEADOW WAY</Text></View>
    </ScrollView>
  );
}

function AppContent() {
  const { width } = useWindowDimensions();
  const wide = width >= 700;
  const [tab, setTab] = useState<Tab>('home');
  const [litres, setLitres] = useState(1);
  const [frequency, setFrequency] = useState<Frequency>('Daily');
  const [pincode, setPincode] = useState('');

  const checkArea = () => {
    Alert.alert('Check your delivery route', 'Enter your six-digit PIN code to check availability.', [
      { text: 'Not now', style: 'cancel' },
      { text: 'Enter PIN', onPress: () => setTab('account') },
    ]);
  };

  const subscribe = () => {
    Alert.alert('Your plan is ready', `${litres} litre${litres === 1 ? '' : 's'} · ${frequency.toLowerCase()} · ₹${Math.round(litres * (frequency === 'Daily' ? 68 : 34) * 30).toLocaleString('en-IN')} estimated monthly`, [{ text: 'Lovely', onPress: () => setTab('account') }]);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" />
      <View style={[styles.appFrame, wide && styles.wideFrame]}>
        <View style={styles.content}>
          {tab === 'home' && <HomeScreen onChoosePlan={() => setTab('plans')} onCheckArea={checkArea} wide={wide} />}
          {tab === 'plans' && <PlansScreen litres={litres} setLitres={setLitres} frequency={frequency} setFrequency={setFrequency} onSubscribe={subscribe} wide={wide} />}
          {tab === 'quality' && <QualityScreen wide={wide} />}
          {tab === 'account' && (
            <>
              <AccountScreen onCheckArea={checkArea} wide={wide} />
              <View style={styles.pinEntry}>
                <Text style={styles.fieldLabel}>CHECK YOUR PIN CODE</Text>
                <View style={styles.pinInputRow}>
                  <TextInput
                    accessibilityLabel="Six-digit delivery PIN code"
                    keyboardType="number-pad"
                    maxLength={6}
                    onChangeText={setPincode}
                    placeholder="Enter 6-digit PIN"
                    placeholderTextColor="#939A91"
                    style={styles.pinInput}
                    value={pincode}
                  />
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => Alert.alert(pincode.length === 6 ? 'Thanks for checking' : 'Enter a six-digit PIN', pincode.length === 6 ? 'Our team can confirm your exact route availability.' : 'A PIN code has six digits.')}
                    style={styles.pinButton}
                  ><ArrowRight size={19} color={palette.white} /></Pressable>
                </View>
              </View>
            </>
          )}
        </View>
        <View style={styles.tabBar}>
          {([
            ['home', 'Home', House],
            ['plans', 'My plan', Milk],
            ['quality', 'Our quality', FlaskConical],
            ['account', 'Account', UserRound],
          ] as const).map(([key, label, Icon]) => {
            const selected = tab === key;
            return (
              <Pressable key={key} accessibilityRole="tab" accessibilityState={{ selected }} onPress={() => setTab(key)} style={styles.tabButton}>
                <View style={[styles.tabIcon, selected && styles.tabIconSelected]}><Icon size={19} color={selected ? palette.white : palette.muted} strokeWidth={selected ? 2.2 : 1.8} /></View>
                <Text style={[styles.tabLabel, selected && styles.tabLabelSelected]}>{label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return <SafeAreaProvider><AppContent /></SafeAreaProvider>;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: palette.paper },
  appFrame: { flex: 1, width: '100%', alignSelf: 'center' },
  wideFrame: { maxWidth: 980 },
  content: { flex: 1 },
  page: { paddingHorizontal: 20, paddingBottom: 30 },
  widePage: { paddingHorizontal: 32, paddingBottom: 36 },
  topline: { minHeight: 68, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  brandLockup: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandMark: { width: 40, height: 40, borderRadius: 14, backgroundColor: palette.green, alignItems: 'center', justifyContent: 'center' },
  brandName: { color: palette.ink, fontSize: 20, lineHeight: 22, fontWeight: '700', letterSpacing: 0.2 },
  brandCaption: { color: palette.muted, fontSize: 8, lineHeight: 13, fontWeight: '700', letterSpacing: 1.3 },
  locationButton: { flexDirection: 'row', alignItems: 'center', gap: 7, paddingVertical: 7, paddingLeft: 10 },
  locationCopy: { gap: 2 },
  eyebrow: { color: palette.muted, fontSize: 9, lineHeight: 13, fontWeight: '700', letterSpacing: 1.05 },
  locationName: { color: palette.ink, fontSize: 13, fontWeight: '600' },
  hero: { minHeight: 396, borderRadius: 9, overflow: 'hidden', justifyContent: 'center', backgroundColor: '#68774D' },
  wideHero: { minHeight: 470 },
  heroImage: { borderRadius: 9 },
  heroShade: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(18, 32, 25, 0.40)' },
  heroContent: { paddingHorizontal: 23, paddingVertical: 26, alignItems: 'flex-start' },
  freshPill: { flexDirection: 'row', alignItems: 'center', gap: 7, paddingHorizontal: 10, paddingVertical: 7, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.92)', marginBottom: 17 },
  freshDot: { width: 6, height: 6, borderRadius: 4, backgroundColor: palette.green },
  freshText: { color: palette.green, fontSize: 8, fontWeight: '800', letterSpacing: 1 },
  heroTitle: { color: palette.white, fontFamily: 'Georgia', fontSize: 41, lineHeight: 45, fontWeight: '600' },
  heroSubtitle: { color: 'rgba(255,255,255,0.91)', fontSize: 13, lineHeight: 20, marginTop: 10 },
  heroButton: { marginTop: 20, minHeight: 46, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', gap: 12, borderRadius: 4, backgroundColor: palette.lime },
  heroButtonText: { color: palette.ink, fontWeight: '700', fontSize: 12 },
  heroNote: { position: 'absolute', right: 15, bottom: 15, flexDirection: 'row', alignItems: 'center', gap: 8, padding: 10, borderRadius: 4, backgroundColor: 'rgba(26, 42, 30, 0.78)' },
  heroNoteNumber: { color: palette.lime, fontFamily: 'Georgia', fontSize: 17 },
  heroNoteText: { color: palette.white, fontSize: 9, lineHeight: 13 },
  benefitRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8, paddingVertical: 20, borderBottomWidth: 1, borderColor: palette.line },
  wideBenefitRow: { paddingVertical: 24 },
  benefitItem: { flex: 1, minWidth: 0, flexDirection: 'row', alignItems: 'center', gap: 8 },
  benefitIcon: { width: 32, height: 32, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.lightGreen },
  benefitCopy: { flex: 1, minWidth: 0 },
  benefitTitle: { color: palette.ink, fontSize: 10, fontWeight: '700' },
  benefitDetail: { color: palette.muted, fontSize: 8, lineHeight: 12, marginTop: 2 },
  sectionHeading: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: 25, paddingBottom: 14 },
  sectionHeadingWide: { paddingTop: 32 },
  sectionTitle: { color: palette.ink, fontFamily: 'Georgia', fontSize: 23, lineHeight: 29, marginTop: 5 },
  sectionAside: { color: palette.muted, fontSize: 9, paddingBottom: 4 },
  promiseGrid: { flexDirection: 'row', gap: 10 },
  widePromiseGrid: { gap: 14 },
  promiseCard: { flex: 1, minHeight: 146, padding: 15, borderRadius: 6, backgroundColor: '#F0EDE3' },
  promiseCardGreen: { backgroundColor: '#E6ECE2' },
  promiseNumberRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  promiseNumber: { color: palette.muted, fontSize: 10, fontWeight: '700' },
  promiseTitle: { color: palette.ink, fontFamily: 'Georgia', fontSize: 17, marginTop: 18 },
  promiseBody: { color: palette.muted, fontSize: 10, lineHeight: 16, marginTop: 6 },
  areaBanner: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, marginTop: 14, borderRadius: 6, backgroundColor: palette.white },
  areaIcon: { width: 38, height: 38, borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.lightGreen },
  areaCopy: { flex: 1 },
  areaTitle: { color: palette.ink, fontSize: 12, fontWeight: '700' },
  areaDescription: { color: palette.muted, fontSize: 10, marginTop: 3 },
  footerNote: { color: palette.muted, fontSize: 8, textAlign: 'center', letterSpacing: 1, marginTop: 20, marginBottom: 4 },
  screenHeader: { paddingTop: 22, paddingBottom: 20 },
  screenTitle: { color: palette.ink, fontFamily: 'Georgia', fontSize: 30, lineHeight: 37, marginTop: 7 },
  screenDescription: { color: palette.muted, fontSize: 12, lineHeight: 19, marginTop: 6, maxWidth: 410 },
  planPanel: { padding: 18, borderRadius: 7, backgroundColor: palette.white },
  widePlanPanel: { padding: 26 },
  planTopline: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 },
  planHeading: { color: palette.ink, fontFamily: 'Georgia', fontSize: 23, marginTop: 4 },
  planMilkIcon: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.lightGreen },
  fieldLabel: { color: palette.muted, fontSize: 9, fontWeight: '800', letterSpacing: 1, marginBottom: 9 },
  segmentRow: { flexDirection: 'row', padding: 4, gap: 4, borderRadius: 5, backgroundColor: palette.paper, marginBottom: 22 },
  segment: { flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 42, borderRadius: 4 },
  segmentSelected: { backgroundColor: palette.green },
  segmentText: { color: palette.muted, fontSize: 11, fontWeight: '600' },
  segmentTextSelected: { color: palette.white },
  quantityRow: { flexDirection: 'row', gap: 7 },
  quantityButton: { flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 66, borderWidth: 1, borderColor: palette.line, borderRadius: 5 },
  quantitySelected: { backgroundColor: palette.lightGreen, borderColor: palette.green },
  quantityValue: { color: palette.ink, fontSize: 17, fontWeight: '700' },
  quantityUnit: { color: palette.muted, fontSize: 9, marginTop: 2 },
  quantityTextSelected: { color: palette.green },
  planDivider: { height: 1, backgroundColor: palette.line, marginTop: 22, marginBottom: 18 },
  planSummary: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  summaryLabel: { color: palette.muted, fontSize: 8, fontWeight: '800', letterSpacing: 0.8 },
  summaryCaption: { color: palette.muted, fontSize: 9, marginTop: 4 },
  summaryAmount: { color: palette.ink, fontFamily: 'Georgia', fontSize: 23 },
  actionButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, minHeight: 48, paddingHorizontal: 16, borderRadius: 4, backgroundColor: palette.green },
  actionButtonText: { color: palette.white, fontSize: 12, fontWeight: '700' },
  secondaryButton: { backgroundColor: palette.lightGreen },
  secondaryButtonText: { color: palette.green },
  pressed: { opacity: 0.78 },
  planFootnote: { color: palette.muted, textAlign: 'center', fontSize: 9, marginTop: 12 },
  deliveryNote: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 14, padding: 14, borderRadius: 5, backgroundColor: palette.lightGreen },
  deliveryNoteText: { flex: 1, color: palette.green, fontSize: 11, lineHeight: 17 },
  labCard: { padding: 17, borderRadius: 7, backgroundColor: palette.white },
  labHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  labIcon: { width: 40, height: 40, borderRadius: 13, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.lightGreen },
  labHeading: { flex: 1 },
  labBatch: { color: palette.ink, fontFamily: 'Georgia', fontSize: 17, marginTop: 3 },
  verified: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 5, borderRadius: 3, backgroundColor: palette.green },
  verifiedText: { color: palette.white, fontSize: 8, fontWeight: '800', letterSpacing: 0.5 },
  labDate: { color: palette.muted, fontSize: 9, marginTop: 12 },
  labRule: { height: 1, backgroundColor: palette.line, marginVertical: 13 },
  checkRow: { minHeight: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 6, borderBottomWidth: 1, borderColor: '#F0F0EA' },
  checkLabel: { flex: 1, color: palette.muted, fontSize: 10 },
  checkValue: { color: palette.ink, fontSize: 11, fontWeight: '700' },
  checkStatus: { width: 92, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4 },
  checkStatusText: { color: palette.green, fontSize: 8 },
  transparencyNote: { flexDirection: 'row', alignItems: 'flex-start', gap: 11, padding: 15, marginTop: 13, borderRadius: 5, backgroundColor: palette.lightGreen },
  transparencyCopy: { flex: 1 },
  transparencyTitle: { color: palette.green, fontSize: 12, fontWeight: '700' },
  transparencyBody: { color: palette.green, fontSize: 10, lineHeight: 16, marginTop: 4 },
  accountProfile: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 17, marginBottom: 10, borderRadius: 6, backgroundColor: palette.lightGreen },
  profileAvatar: { width: 48, height: 48, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.white },
  profileCopy: { flex: 1 },
  profileTitle: { color: palette.ink, fontSize: 13, fontWeight: '700' },
  profileDetail: { color: palette.muted, fontSize: 10, marginTop: 4 },
  accountRow: { minHeight: 70, flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 12, borderBottomWidth: 1, borderColor: palette.line },
  accountRowIcon: { width: 36, height: 36, borderRadius: 11, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.lightGreen },
  accountRowCopy: { flex: 1 },
  accountRowTitle: { color: palette.ink, fontSize: 12, fontWeight: '700' },
  accountRowDetail: { color: palette.muted, fontSize: 10, marginTop: 4 },
  accountQuote: { padding: 18, marginTop: 18, borderRadius: 6, backgroundColor: '#F0EDE3' },
  quoteMark: { color: palette.orange, fontFamily: 'Georgia', fontSize: 34, lineHeight: 35 },
  quoteText: { color: palette.ink, fontFamily: 'Georgia', fontSize: 18, lineHeight: 25, marginTop: 4 },
  quoteAttribution: { color: palette.muted, fontSize: 8, fontWeight: '800', letterSpacing: 1, marginTop: 12 },
  pinEntry: { marginTop: 20, padding: 15, borderRadius: 6, backgroundColor: palette.white },
  pinInputRow: { flexDirection: 'row', gap: 8 },
  pinInput: { flex: 1, minHeight: 46, paddingHorizontal: 12, borderWidth: 1, borderColor: palette.line, borderRadius: 4, color: palette.ink, fontSize: 13 },
  pinButton: { width: 48, minHeight: 46, borderRadius: 4, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.green },
  tabBar: { minHeight: 68, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 8, borderTopWidth: 1, borderColor: palette.line, backgroundColor: palette.white },
  tabButton: { minWidth: 66, minHeight: 58, alignItems: 'center', justifyContent: 'center', gap: 3 },
  tabIcon: { width: 34, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  tabIconSelected: { backgroundColor: palette.green },
  tabLabel: { color: palette.muted, fontSize: 8, fontWeight: '600' },
  tabLabelSelected: { color: palette.green, fontWeight: '800' },
});