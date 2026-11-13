// Unloop – Central Resource Dataset
// Research date: 7 November 2026.
// Features, pricing and availability may change. Verify at official sources before use.
// "Not verified" means the information could not be confirmed from an official source.

export type Category =
  | 'Focus & Productivity'
  | 'Screen-Time Management'
  | 'Mental Wellness'
  | 'Notifications & Sleep';

export type PricingLabel = 'Free' | 'Freemium' | 'Paid' | 'Built-in';

export interface Resource {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: Category;
  platforms: string[];
  pricingLabel: PricingLabel;
  pricingNote: string;
  keyFeatures: string[];
  privacyNote: string;
  limitations: string[];
  bestFor: string;
  websiteUrl: string;
  docsUrl: string; // "Not verified" if not confirmed
  checkedOn: string;
}

export const CHECKED_ON = '2026-11-07';

export const RESEARCH_NOTICE =
  'Resource information was researched on 7 November 2026. Features, availability, pricing, and privacy policies may change. Please check official sources before installing or purchasing a resource.';

export const resources: Resource[] = [
  // ── Focus & Productivity ─────────────────────────────────────────────────
  {
    id: 'ticktick',
    slug: 'ticktick',
    name: 'TickTick',
    summary: 'To-do list and calendar app for tasks, reminders and habits.',
    description:
      'TickTick helps students keep assignments, deadlines and habits in one place with cross-device sync. It offers multiple list views, natural-language task entry and habit tracking. A Pomodoro/focus timer is reported by third-party reviews but does not appear on the official pricing page — treat it as not verified.',
    category: 'Focus & Productivity',
    platforms: ['Web', 'Android', 'iOS/iPadOS'],
    pricingLabel: 'Freemium',
    pricingNote:
      'Free plan: 9 lists, 99 tasks per list, 2 reminders per task, 5 habits. Premium: US$49.99 per year on the official page as of 7 Nov 2026 (source: official pricing page). Prices vary by country and store. An older third-party figure of US$35.99/year is outdated.',
    keyFeatures: [
      'List and Kanban views',
      'Natural-language task entry',
      'Reminders',
      'Habit tracking',
      'Calendar view (basic on Free; expanded on Premium)',
      'Cross-platform sync',
      'Eisenhower Matrix',
      'Widgets and themes',
    ],
    privacyNote:
      'Task data is synced through a TickTick account. TickTick states that data is retained if Premium expires. Policy: ticktick.com/about/privacy. Detailed data collection: Not verified (the policy page blocked automated access during research).',
    limitations: [
      'Free plan has hard caps on lists, tasks, reminders and habits',
      'Calendar views, task duration and AI features require Premium',
      'No app or website blocking appears in the official feature list',
      'Pricing changed recently and differs by country and store',
    ],
    bestFor: 'Students juggling many assignments, exams and habits who want one planner.',
    websiteUrl: 'https://ticktick.com',
    docsUrl: 'https://help.ticktick.com',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'forest',
    slug: 'forest',
    name: 'Forest',
    summary: 'Gamified focus timer where a virtual tree grows while you stay off your phone.',
    description:
      'Forest turns staying focused into a game: you plant a virtual seed that grows into a tree while you stay off your phone. Leaving the app early kills the tree. The developer also partners with Trees for the Future to plant real trees. Browser extensions are available for Chrome and Firefox.',
    category: 'Focus & Productivity',
    platforms: ['iOS/iPadOS', 'Browser extensions (Chrome, Firefox)', 'Android (not verified directly)'],
    pricingLabel: 'Freemium',
    pricingNote:
      'Store listings conflict. The current App Store listing shows Free with a Forest Plus subscription (monthly US$5.99 seen; annual prices vary by country). An older listing showed a US$3.99 one-time price — the model has changed. Exact free vs Plus feature split: Not verified. Prices vary by country.',
    keyFeatures: [
      'Gamified focus timer',
      'Allow Lists that block non-allowed apps (iOS/iPadOS 16+)',
      'Custom tags and time statistics',
      'Weekly, monthly and yearly forest views',
      'Apple Health sync',
      'Real-tree planting partnership',
    ],
    privacyNote:
      'Policy: forestapp.cc/privacy. The App Store privacy label (developer-declared, not verified by Apple) lists identifiers, usage data, diagnostics, purchases and user content as data types. The Firefox add-on policy notes that logging in may fetch your Forest profile and that data may be shared with third-party providers.',
    limitations: [
      'Pricing model and regional prices are inconsistent across store listings',
      'Not a strict blocker — blocking on iOS depends on Allow Lists (iOS 16+)',
      'Browser extension is secondary to the mobile app',
      'Official help documentation: Not verified',
    ],
    bestFor: 'Students who pick up their phone while studying and respond to game-like rewards.',
    websiteUrl: 'https://www.forestapp.cc',
    docsUrl: 'Not verified',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'freedom',
    slug: 'freedom',
    name: 'Freedom',
    summary: 'Blocks websites and apps across your devices during timed sessions.',
    description:
      'Freedom lets you start a blocking session that covers websites, apps, or the whole internet across all your devices at once. It is useful for students who need the same distraction block on both phone and laptop. The free plan allows Start Now sessions only, up to 2 hours.',
    category: 'Focus & Productivity',
    platforms: ['Mac', 'Windows', 'iOS', 'Android', 'Chromebook/Linux'],
    pricingLabel: 'Freemium',
    pricingNote:
      'Free account: Start Now sessions only, max 2 hours, no recurring sessions, no Locked Mode. Premium adds those features. Premium prices: Not verified on an official page. Third-party sites report approximately US$8.99/month or US$3.33/month billed yearly — these are unverified estimates. Prices vary by country.',
    keyFeatures: [
      'Block apps, websites or the entire internet',
      'Custom blocklists',
      'Unlimited devices',
      'Focus Sounds',
      'Website exceptions (Mac and Windows only)',
      'Locked Mode — prevents ending a session early (Premium)',
      'Recurring and scheduled sessions (Premium)',
    ],
    privacyNote:
      'The privacy policy is linked at freedom.to/privacy but could not be opened during research. Data collection details: Not verified. A cross-device blocker requires an account.',
    limitations: [
      'Free plan cannot schedule or lock sessions',
      'Free sessions are limited to 2 hours (Start Now only)',
      'iOS app blocking depends on Apple Screen Time permissions',
      'Locked Mode (Premium) means you cannot end a block early',
    ],
    bestFor: 'Students who need the same social media block on phone and laptop.',
    websiteUrl: 'https://freedom.to',
    docsUrl: 'https://support.freedom.to/en/',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'cold-turkey',
    slug: 'cold-turkey',
    name: 'Cold Turkey Blocker',
    summary: 'Strict desktop blocker for websites and apps, known for locks that are hard to undo.',
    description:
      'Cold Turkey Blocker is a Windows and macOS application that blocks websites and applications during sessions you configure. It is known for strong locking features that make it difficult to bypass your own blocks — which is the point for students who struggle with self-control. The free version covers websites; the Pro version (one-time purchase) adds application blocking, scheduling, and all locking features.',
    category: 'Focus & Productivity',
    platforms: ['Windows', 'macOS'],
    pricingLabel: 'Freemium',
    pricingNote:
      'Free version available with a 7-day Pro trial. Pro is a one-time purchase with lifetime updates, valid for all computers you personally use, and includes a 30-day refund policy. Students can request a 20% discount via the support page. Exact Pro price: Not verified from the page read during research. Third-party sources report approximately US$39, but this is unverified.',
    keyFeatures: [
      'Website blocking (Free)',
      'Website exceptions (Free)',
      'Timed blocks (Free)',
      'Statistics (Free)',
      'Application blocking (Pro)',
      'Scheduled blocks (Pro)',
      'All locking features (Pro)',
      'Breaks and allowances (Pro)',
    ],
    privacyNote:
      'Privacy policy effective 15 October 2026. Collects email, purchase details and licence usage; anonymised website analytics; security logs kept up to 2 months. States it does not collect your software settings, web history, search history, or which sites and apps were blocked. Payments via Paddle; support via Freshworks. Data stored in Canada, with providers in the UK and US. The browser extension needs permission to read and modify web pages (used only for blocking). macOS needs full disk access to check Safari extension settings.',
    limitations: [
      'Desktop only — no mobile version',
      'Free version covers websites only; app blocking requires Pro',
      'Strong locks can be hard to undo — set timers carefully',
      'Exact Pro price not visible on the page read during research',
    ],
    bestFor: 'Windows or Mac students who keep breaking their own website blocks.',
    websiteUrl: 'https://getcoldturkey.com',
    docsUrl: 'https://getcoldturkey.com/support/user-guide/',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'leechblock-ng',
    slug: 'leechblock-ng',
    name: 'LeechBlock NG',
    summary: 'Free, open-source browser extension that blocks time-wasting sites.',
    description:
      'LeechBlock NG is a free, open-source browser extension for Firefox and Chrome. You create block sets with rules: specific times of day, time limits per period, or both. The Lockdown feature blocks immediately for a set duration. It is highly configurable and requires no account.',
    category: 'Focus & Productivity',
    platforms: ['Firefox (desktop and Android)', 'Chrome'],
    pricingLabel: 'Free',
    pricingNote:
      'No paid tier found. Source code is under the Mozilla Public License 2.0. The developer accepts optional contributions.',
    keyFeatures: [
      'Up to 30 block sets',
      'Block by time period, time limit or both',
      'Lockdown — immediate block for a set duration',
      'Password or random-code access control for options',
      'Wildcards and keyword rules',
      'No account required',
    ],
    privacyNote:
      'Developer states no data collection is required (Mozilla add-ons page). Required permissions include browser tabs, browser activity during navigation, and your data for all websites. Optional permission: browsing history. Permissions are broad — install from the official store only.',
    limitations: [
      'Works only inside the browser where it is installed — a student can switch browsers',
      'No desktop application blocking',
      'Broad site permissions needed',
      'Many options can feel complex initially',
    ],
    bestFor: 'Laptop-based students who want a free, flexible way to limit social media and video sites.',
    websiteUrl: 'https://www.proginosko.com/leechblock/',
    docsUrl: 'https://www.proginosko.com/leechblock/documentation/',
    checkedOn: CHECKED_ON,
  },

  // ── Screen-Time Management ───────────────────────────────────────────────
  {
    id: 'screenzen',
    slug: 'screenzen',
    name: 'ScreenZen',
    summary: 'Adds a pause and optional limits before you open distracting apps.',
    description:
      'ScreenZen puts a short pause before you open apps you have flagged as distracting. The wait can increase with each use, and you can add daily limits and schedules. On Android, it can also block websites using the Accessibility permission. It is free with optional in-app tips.',
    category: 'Screen-Time Management',
    platforms: ['Android', 'iOS (15.0 or later)'],
    pricingLabel: 'Free',
    pricingNote:
      'Listed as free with optional in-app purchases. The App Store describes it as donation-supported. A reviewer describes purchases as an optional tip, not a paywall — but that is a user comment, not an official statement.',
    keyFeatures: [
      'Pause before opening selected apps (wait time can increase with each use)',
      'Interruptions during scrolling (short time bursts)',
      'Daily limits per app with optional blocking',
      'Schedules by day and time',
      'Mindful prompts such as "Is this important?"',
      'Screen-time stats for selected apps',
      'Website blocking on Android (via Accessibility permission)',
    ],
    privacyNote:
      'Google Play Data safety (developer-declared, not independently verified): may share app activity, app info and performance, and device or other IDs with third parties; may collect photos and videos, app activity and other data; data encrypted in transit; data cannot be deleted. Policy: screenzen.co/policies/privacy-policy.',
    limitations: [
      'A pause is a nudge, not a lock — hard blocking only applies if you set daily limits',
      'Android website blocking requires Accessibility permission',
      'Data safety declares sharing with third parties and data that cannot be deleted',
      'Official help documentation: Not verified',
    ],
    bestFor: 'Students who open Instagram or YouTube out of habit and want a gentle, free interruption.',
    websiteUrl: 'https://screenzen.co',
    docsUrl: 'Not verified',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'minimalist-phone',
    slug: 'minimalist-phone',
    name: 'Minimalist Phone',
    summary: 'Text-only home screen launcher that reduces autopilot app opening.',
    description:
      'Minimalist Phone replaces your phone\'s icon-filled home screen with a plain, text-based interface designed to reduce the visual triggers that lead to mindless browsing. It is built by QQ42 Labs / Focus Experts. Available for Android and iPhone (iOS 17.0+).',
    category: 'Screen-Time Management',
    platforms: ['Android', 'iOS (17.0+)'],
    pricingLabel: 'Freemium',
    pricingNote:
      'iOS: free to download; in-app purchases include Premium annual subscriptions (US$19.99 and US$4.99 listed on the App Store) and Lifetime access (US$59.99). Which features are free vs paid: Not verified. Android prices: Not verified. Prices vary by country.',
    keyFeatures: [
      'Icon-free, text-based home screen',
      'Smart folders and widgets',
      'In-app time reminder',
      'Mindful launch delay',
      'App blocking',
      'Monochrome mode for selected apps (Android; requires activation from a PC or Mac)',
    ],
    privacyNote:
      'iOS privacy label (developer-declared, not verified by Apple) lists purchases, browsing history, identifiers and other data as possibly used to track you, and usage data and diagnostics as linked to you. Policy: minimalistphone.com/privacy-policy-ios. Policy not opened during research.',
    limitations: [
      'iOS privacy label lists tracking-related data types',
      'Free vs paid feature split is unclear',
      'A launcher replaces your whole home screen — some students may find this too restrictive',
      'Monochrome mode on Android requires activation from a PC or Mac',
      'Official help documentation: Not verified',
    ],
    bestFor: 'Students who want a less tempting phone and are comfortable changing their home screen.',
    websiteUrl: 'https://www.minimalistphone.com',
    docsUrl: 'Not verified',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'digital-wellbeing',
    slug: 'digital-wellbeing',
    name: 'Digital Wellbeing (Android)',
    summary: "Google's built-in usage dashboard, app timers, Focus mode and Bedtime mode.",
    description:
      'Digital Wellbeing is a built-in Android tool from Google that shows how you use your phone and lets you set limits. Access it from Settings > Digital Wellbeing & parental controls. Some steps require Android 10 or later, and availability varies by device and manufacturer.',
    category: 'Screen-Time Management',
    platforms: ['Android (varies by device; Android 10+ for some features)'],
    pricingLabel: 'Built-in',
    pricingNote:
      'Included with supported Android devices. No separate purchase needed. Access: Settings > Digital Wellbeing & parental controls.',
    keyFeatures: [
      'Usage dashboard — unlocks and time per app',
      'App timers — icon dims and app closes when time runs out; resets at midnight',
      'Site timers for Chrome',
      'Focus mode — pause chosen apps and their notifications; schedulable',
      'Bedtime mode with a customisable routine',
    ],
    privacyNote:
      'Usage data is shown to you in Settings on your device. Specific data handling by Google: Not verified on a dedicated page. See Google\'s general privacy policy at policies.google.com/privacy. Work or school accounts may have restrictions on app timers.',
    limitations: [
      'Not available on every Android device or version; menus differ by manufacturer',
      'App timers can be dismissed by the user — easy to bypass',
      'Google reported in September 2026 to be redesigning this feature; screens may change',
    ],
    bestFor: 'Android students who want free, zero-install usage limits and awareness.',
    websiteUrl: 'https://wellbeing.google/tools',
    docsUrl: 'https://support.google.com/android/answer/9346420',
    checkedOn: CHECKED_ON,
  },

  // ── Mental Wellness ──────────────────────────────────────────────────────
  {
    id: 'finch',
    slug: 'finch',
    name: 'Finch',
    summary: 'Self-care habit app built around a virtual pet bird.',
    description:
      'Finch is a self-care app where you look after a virtual pet bird by completing small daily tasks: check-ins, goal tracking, breathing exercises and journaling. It uses game-style rewards to encourage routine. It is not a medical service or therapy substitute.',
    category: 'Mental Wellness',
    platforms: ['iOS/iPadOS (15.6+)', 'Apple Vision', 'Android (not verified directly)'],
    pricingLabel: 'Freemium',
    pricingNote:
      'Free to download with in-app purchases. Paid tier: Finch Plus, available at many price points depending on plan length and country. US App Store lists Finch Plus items from US$5.99 to US$69.99; India App Store lists from approximately ₹549 to ₹6,900. Free vs Finch Plus feature split: Not verified on an official page. Check the price on the checkout screen.',
    keyFeatures: [
      'Daily check-ins and mood tracker',
      'Goal tracker',
      'Guided bullet journaling',
      'Breathing exercises',
      'Quick quizzes',
      'Motivational quotes',
      'Sleep wind-down',
      'Insights from mood, journal tags and goals',
    ],
    privacyNote:
      'Policy: finchcare.com/privacy. App Store privacy label (developer-declared, not verified by Apple) lists user ID, device ID and photos/videos as linked to you. Email, purchase history, product interaction and crash data are listed as not linked. This app collects mood and mental-health data, which is sensitive personal information — read the privacy policy before sharing.',
    limitations: [
      'This is a self-care and habit tool, not a medical or therapy service',
      'Sensitive data including mood-related content is collected',
      'Finch Plus pricing varies widely by country and plan',
      'Android listing not verified directly',
    ],
    bestFor: 'Students building daily self-care habits who prefer a gentle, game-like approach.',
    websiteUrl: 'https://finchcare.com',
    docsUrl: 'Not verified',
    checkedOn: CHECKED_ON,
  },

  // ── Notifications & Sleep ────────────────────────────────────────────────
  {
    id: 'buzzkill',
    slug: 'buzzkill',
    name: 'BuzzKill',
    summary: 'Android app for rule-based notification control.',
    description:
      'BuzzKill lets you create rules for your Android notifications. Rules follow an if-this-then-that pattern: for example, silence all notifications from a certain app between 10 pm and 7 am, or add a share button to a specific notification. It needs notification access to work.',
    category: 'Notifications & Sleep',
    platforms: ['Android'],
    pricingLabel: 'Paid',
    pricingNote:
      'One-time purchase. Listed at approximately US$3.99 on Google Play (source: App Pricing Lab listing). A Dutch source lists €3.99. Prices vary by country. The developer offers refunds outside Google Play\'s return period via an in-app support button.',
    keyFeatures: [
      'If-this-then-that rules for notifications',
      'Restore notifications after reboot',
      'Sticky notifications',
      'Share button added to notifications',
      '"Pocket Check" rules',
      'Alarm trigger rules',
      'Companion app for Wear OS',
    ],
    privacyNote:
      'Privacy: Not verified. Any app managing other apps\' notifications must be granted notification access in Android settings — this is standard Android behaviour, not a BuzzKill-specific claim. Review the Google Play Data safety section and permissions before installing.',
    limitations: [
      'Android only',
      'Paid — no free tier found',
      'Rules take time to understand; straightforward once learned',
      'Requires notification access permission',
    ],
    bestFor: 'Android students overwhelmed by group chats and app alerts who want fine-grained control.',
    websiteUrl: 'https://play.google.com/store/apps/details?id=com.samruston.buzzkill',
    docsUrl: 'Not verified',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'ios-focus',
    slug: 'ios-focus',
    name: 'iOS Focus / Sleep Focus',
    summary: "Apple's built-in Focus modes that silence notifications by situation.",
    description:
      'iOS Focus is a built-in Apple feature introduced with iOS 15 that lets you silence notifications based on what you are doing. Sleep Focus follows your sleep schedule from the Health app and quiets your phone at night. Settings sync across Apple devices signed into the same Apple Account.',
    category: 'Notifications & Sleep',
    platforms: ['iPhone', 'iPad', 'Mac', 'Apple Watch'],
    pricingLabel: 'Built-in',
    pricingNote:
      'Included with the operating system on supported Apple devices. Requires iOS 15 or later. Access: Settings > Focus.',
    keyFeatures: [
      'Presets: Do Not Disturb, Driving, Personal, Sleep, Work',
      'Custom Focus modes',
      'Allow notifications from chosen people per Focus',
      'Scheduled activation',
      'Customisable Lock Screen and Home Screen per Focus',
      'Sleep Focus follows your Health app sleep schedule',
      'Share Across Devices — syncs Focus to all signed-in Apple devices',
      'Focus status can tell contacts notifications are silenced',
    ],
    privacyNote:
      'Focus settings stay on your device and sync to other Apple devices signed into the same Apple Account if Share Across Devices is enabled. If Focus status is enabled, contacts can see that your notifications are silenced. Full data handling details: Not verified on a dedicated page.',
    limitations: [
      'Apple devices only',
      'Silences notifications — does not block apps or websites like Freedom or Cold Turkey',
      'Share Across Devices can cause unexpected behaviour if not expected; can be turned off',
      'iOS version matters — check Apple\'s current guide for your iOS version',
    ],
    bestFor: 'iPhone students who want quiet study blocks and a consistent sleep routine with no extra app.',
    websiteUrl: 'https://support.apple.com/en-gb/guide/iphone/iphd6288a67f/ios',
    docsUrl: 'https://support.apple.com/pa-in/guide/iphone/set-up-a-schedule-for-a-sleep-focus-iphaf56dceb4/16.0/ios/16.0',
    checkedOn: CHECKED_ON,
  },
  {
    id: 'android-notification-controls',
    slug: 'android-notification-controls',
    name: 'Android Notification Controls',
    summary: 'Built-in Android settings to control which apps and alerts can interrupt you.',
    description:
      'Android includes per-app notification controls, notification categories (channels), snooze, notification history, Do Not Disturb, and lock-screen privacy options. These are built into the operating system — no extra app needed. Access from Settings > Notifications.',
    category: 'Notifications & Sleep',
    platforms: ['Android (steps vary; some features require Android 11+)'],
    pricingLabel: 'Built-in',
    pricingNote:
      'Included with Android. No separate purchase needed. Access: Settings > Notifications.',
    keyFeatures: [
      'Per-app notification settings',
      'Notification categories (channels) with their own sound and importance',
      'Snooze notifications',
      'Notification history for snoozed and recently dismissed alerts',
      'Conversation controls',
      'Do Not Disturb',
      'Lock-screen privacy options',
    ],
    privacyNote:
      'Notification history can be switched on or off in Settings. Where history data is stored and what is kept: Not verified.',
    limitations: [
      'Menus and features differ by manufacturer and Android version',
      'Notification categories only work if the app developer supports them',
      'No rule-based automation — see BuzzKill for that',
      'Some apps still send alerts that cannot be fully turned off',
    ],
    bestFor: 'Any Android student wanting quick wins: mute noisy apps, snooze alerts, hide lock-screen content.',
    websiteUrl: 'https://support.google.com/android/answer/9079661',
    docsUrl: 'https://support.google.com/android/answer/9079661',
    checkedOn: CHECKED_ON,
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesByCategory(category: Category): Resource[] {
  return resources.filter((r) => r.category === category);
}
