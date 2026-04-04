import { useComputed } from "@preact/signals";
import { language } from "./store/language";

// Import translation files
import en from "./locales/en.json";
import kz from "./locales/kz.json";
import ru from "./locales/ru.json";

const translations = {
  en,
  kz,
  ru
};

export function useTranslation() {
  const currentTranslations = useComputed(() => translations[language.value]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = currentTranslations.value;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, currentLanguage: language.value };
}