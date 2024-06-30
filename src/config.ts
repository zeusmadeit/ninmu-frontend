export type Locale = (typeof locales)[number];

export const locales = ['en', 'de', 'es', 'ja', 'ko', 'zh', 'ar'] as const;
export const defaultLocale: Locale = 'en';
