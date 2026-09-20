import en from './locales/en.json';
import es from './locales/es.json';
import {createI18n} from "vue-i18n";

/**
 *
 * Shared internalization (i18n) instance for the application.
 *
 * This instance is created using the 'createI18n' function from the vue-i18n library.
 * It is configured with the default locale, fallback locale, and the translation messages
 * for English and Spanish languages.
 *
 * @type {I18n<{en: {"read-more": string}, es: {"read-more": string}} extends Record<string, unknown> ? {en: {"read-more": string}, es: {"read-more": string}} : {}, {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["datetimeFormats"] extends Record<string, unknown> ? {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["datetimeFormats"] : {}, {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["numberFormats"] extends Record<string, unknown> ? {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["numberFormats"] : {}, string extends string ? string : Locale, true> | I18n<{en: {"read-more": string}, es: {"read-more": string}} extends Record<string, unknown> ? {en: {"read-more": string}, es: {"read-more": string}} : {}, {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["datetimeFormats"] extends Record<string, unknown> ? {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["datetimeFormats"] : {}, {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["numberFormats"] extends Record<string, unknown> ? {locale: string, fallbackLng: string, messages: {en: {"read-more": string}, es: {"read-more": string}}}["numberFormats"] : {}, string extends string ? string : Locale, false>}
 */

const i18n = createI18n({
    locale: 'en',
    fallbackLng: 'en',
    messages: {en, es}
});

export default i18n;