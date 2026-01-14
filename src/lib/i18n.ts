export type Locale = 'ja' | 'en';

export const getLocale = (url: URL): Locale => (url.searchParams.get('lang') === 'en' ? 'en' : 'ja');

export const withLang = (path: string, locale: Locale): string => {
  const [base, hash] = path.split('#');
  if (locale !== 'en') {
    return hash ? `${base}#${hash}` : base;
  }
  const joiner = base.includes('?') ? '&' : '?';
  const localized = `${base}${joiner}lang=en`;
  return hash ? `${localized}#${hash}` : localized;
};
