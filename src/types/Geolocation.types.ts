import { z } from 'zod'
import { GeolocationResponseSchema } from '@/src/schemas/Geolocation.schemas'

export type GeolocationResponse = z.infer<typeof GeolocationResponseSchema>
