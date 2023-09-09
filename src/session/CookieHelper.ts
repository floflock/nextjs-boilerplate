import { customAlphabet } from 'nanoid'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export const COOKIE_NAME: string = 'kss'

export const COOKIE_SETTINGS: Partial<ResponseCookie> = {
  httpOnly: true,
  maxAge: 86400 * 14,
  sameSite: 'strict',
  secure: true
}

export function getNewSessionId(): string {
  return customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')()
}
