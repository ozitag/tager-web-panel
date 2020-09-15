const EN_LOCALE = {
  adminBar: 'Admin panel',
};

type Locale = typeof EN_LOCALE;

const RU_LOCALE: Locale = {
  adminBar: 'Панель управления',
};

function getLocale(lang: string): Locale {
  switch (lang.toLowerCase()) {
    case 'en':
      return EN_LOCALE;
    case 'ru':
      return RU_LOCALE;
    default:
      return EN_LOCALE;
  }
}

export function getTranslateFunction(lang: string) {
  return function t(key: keyof Locale): string {
    return getLocale(lang)[key] ?? '';
  };
}
