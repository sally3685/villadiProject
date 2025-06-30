import 'server-only';

type Locale = 'en' | 'ar';
type Dictionary = () => Promise<Record<string, any>>;

const dictionaries: Record<string, Dictionary> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
