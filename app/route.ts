import { NextResponse } from 'next/server'
import { getIpAddressFromiRequest } from '@/src/geolocation/RequestGeolocation'
import { getIpAddressGeolocation } from '@/src/geolocation/GeoloationService'
import { COUNTRY_TO_LOCALE, DEFAULT_LOCALE } from '@/config/intl'
import { CountryCodeSchema } from '@/src/schemas/Intl.schemas'
import { GEOLOCATION_ENABLED } from '@/config/app'

export async function GET(request: Request) {
  const ipAddress = getIpAddressFromiRequest(request)

  let locale = DEFAULT_LOCALE

  if (GEOLOCATION_ENABLED && ipAddress) {
    const ipResponse = await getIpAddressGeolocation(ipAddress)
    const supportedCountry = CountryCodeSchema.safeParse(ipResponse?.countryCode)

    if (supportedCountry.success) {
      locale = COUNTRY_TO_LOCALE[supportedCountry.data]
    }
  }

  return NextResponse.redirect(new URL(`/${locale}?utm_source=root_domain`, request.url))
}
