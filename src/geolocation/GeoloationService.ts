import { GeolocationResponseSchema } from '@/src/schemas/Geolocation.schemas'

export async function getIpAddressGeolocation(ipAddress: string) {
  try {
    const response = await fetch(`https://freeipapi.com/api/json/${ipAddress}`)
    return GeolocationResponseSchema.parse(await response.json())
  } catch (e) {
    return null
  }
}
