import { z } from 'zod'
import { AVAILABLE_COUNTRIES, AVAILABLE_LANGUAGES, AVAILABLE_LOCALES } from '@/config/intl'

export const CountryCodeSchema = z.enum(AVAILABLE_COUNTRIES)

export const LanguageCodeSchema = z.enum(AVAILABLE_LANGUAGES)

export const LocaleSchema = z.enum(AVAILABLE_LOCALES)

export const CurrencyCodeSchema = z.enum(AVAILABLE_LOCALES)
