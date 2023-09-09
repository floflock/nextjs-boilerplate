import { CountryToLocale, Locale, LocaleInfo } from '@/src/types/Intl.types'

export const AVAILABLE_LANGUAGES = ['de', 'en'] as const

export const AVAILABLE_COUNTRIES = ['AT', 'DE', 'CH', 'FR', 'IT', 'HU', 'BE', 'NL'] as const

export const AVAILABLE_LOCALES = ['de-AT', 'de-DE', 'de-CH', 'en-BE', 'en-FR', 'en-HU', 'en-IT', 'en-NL'] as const

export const DEFAULT_LOCALE: Locale = 'de-AT'

export const AVAILABLE_CURRENCIES = ['EUR', 'CHF', 'HUF'] as const

export const COUNTRY_TO_LOCALE: CountryToLocale = {
  AT: 'de-AT',
  DE: 'de-DE',
  CH: 'de-CH',
  IT: 'en-IT',
  BE: 'en-BE',
  NL: 'en-NL',
  HU: 'en-HU',
  FR: 'en-FR'
}

export const LOCALE_INFO: LocaleInfo = {
  'de-AT': {
    countryCode: 'AT',
    languageCode: 'de'
  },
  'de-CH': {
    countryCode: 'CH',
    languageCode: 'de'
  },
  'de-DE': {
    countryCode: 'DE',
    languageCode: 'de'
  },
  'en-HU': {
    countryCode: 'HU',
    languageCode: 'en'
  },
  'en-FR': {
    countryCode: 'FR',
    languageCode: 'en'
  },
  'en-BE': {
    countryCode: 'BE',
    languageCode: 'en'
  },
  'en-IT': {
    countryCode: 'IT',
    languageCode: 'en'
  },
  'en-NL': {
    countryCode: 'NL',
    languageCode: 'en'
  }
}
