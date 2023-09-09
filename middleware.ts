import { NextRequest, NextResponse } from 'next/server'
import { COOKIE_NAME, COOKIE_SETTINGS, getNewSessionId } from '@/src/session/CookieHelper'

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  if (!req.cookies.has(COOKIE_NAME)) {
    const sessionId = getNewSessionId()

    res.cookies.set(COOKIE_NAME, sessionId, COOKIE_SETTINGS)

    // todo: create empty session in redis
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
