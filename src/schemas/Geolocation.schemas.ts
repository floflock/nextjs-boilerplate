import { z } from 'zod'

export const GeolocationResponseSchema = z
  .object({
    ipAddress: z.string(),
    countryCode: z.string()
  })
  .strip()
