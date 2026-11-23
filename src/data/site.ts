export const SITE = {
  name: 'Moe Memos',
  description:
    'An open-source app for iPhone, iPad, and Android to capture thoughts and ideas—locally on your device or synced offline-first with your self-hosted Memos server.',
  url: 'https://memos.moe',
  email: 'memos@memos.moe',
  memosRepo: 'https://github.com/usememos/memos',
  mortisRepo: 'https://github.com/mudkipme/mortis',
  githubAll: 'https://github.com/mudkipme?tab=repositories&q=moe+memos',
  iosRepo: 'https://github.com/mudkipme/MoeMemos',
  androidRepo: 'https://github.com/mudkipme/MoeMemosAndroid',
  kofi: 'https://ko-fi.com/mudkipme',
  mastodon: 'https://fosstodon.org/@moememos',
} as const;

export const MEMOS_COMPATIBILITY = {
  versions: ['0.21.0', '0.27.0 – 0.31.0', '26.10.0 – 26.11.2'],
} as const;

export const DOWNLOADS = {
  appStore: 'https://apps.apple.com/app/moe-memos/id1643902185',
  googlePlay: 'https://play.google.com/store/apps/details?id=me.mudkip.moememos',
  fDroid: 'https://f-droid.org/packages/me.mudkip.moememos/',
  githubApk: 'https://github.com/mudkipme/MoeMemosAndroid/releases/latest',
} as const;

export const FEATURES = [
  {
    title: 'Local or self-hosted',
    description:
      'Use standalone on your device with backup and restore, or sync two-way with your own Memos server.',
  },
  {
    title: 'Offline-first',
    description:
      'Write, edit, pin, and archive without a connection. Changes push automatically when you are back online.',
  },
  {
    title: 'Markdown, media & places',
    description:
      'Extended Markdown, to-do lists, images, videos, general files, and location tags.',
  },
  {
    title: 'Organize & rediscover',
    description:
      'Tags, pinning, archive, full-text search, and an activity progress graph.',
  },
  {
    title: 'Native to each platform',
    description:
      'Liquid Glass, Widgets, Journal Suggestions, Spotlight & Siri on iOS; Material You, Widgets and App Lock on Android.',
  },
  {
    title: 'Private & open source',
    description:
      'No tracking, no analytics, and no data collection. Open source under MPLv2 (iOS) and GPLv3 (Android).',
  },
] as const;
