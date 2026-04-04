import { signal } from "@preact/signals";

// Определяем типы на основе структуры JSON
export type LanguageCode = 'ru' | 'kz' | 'en';

// Сигнал с явным указанием типа
export const language = signal<LanguageCode>(
    (localStorage.getItem('lang') as LanguageCode) || 'ru'
);

export const setLanguage = (lang: LanguageCode): void => {
    language.value = lang;
    localStorage.setItem('lang', lang);
};