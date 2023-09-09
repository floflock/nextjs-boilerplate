import { AVAILABLE_COUNTRIES, AVAILABLE_CURRENCIES, AVAILABLE_LANGUAGES, AVAILABLE_LOCALES } from '@/config/intl'

export type CountryCode = (typeof AVAILABLE_COUNTRIES)[number]

export type LanguageCode = (typeof AVAILABLE_LANGUAGES)[number]

export type Locale = (typeof AVAILABLE_LOCALES)[number]

export type CurrencyCode = (typeof AVAILABLE_CURRENCIES)[number]

export type LocaleInfo = {
  [key in Locale]: {
    countryCode: CountryCode
    languageCode: LanguageCode
  }
}

export type CountryToLocale = { [key in CountryCode]: Locale }
