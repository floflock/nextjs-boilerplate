import { NextRequest } from 'next/server'

export function getIpAddressFromiRequest(req: Request) {
  const { headers } = req

  if (headers.has('x-real-ip') && typeof headers.get('x-real-ip') === 'string') {
    return headers.get('x-real-ip')
  }

  if (headers.has('x-forwarded-for') && typeof headers.get('x-forwarded-for') === 'string') {
    const xForwardedForHeader = headers.get('x-forwarded-for')
    return xForwardedForHeader ? xForwardedForHeader.split(/, /)[0].trim() : null
  }

  return null
}

export function getIpAddressFromNextRequest(req: NextRequest) {
  const { headers } = req

  if (headers.get('x-real-ip') && typeof headers.get('x-real-ip') === 'string') {
    return headers.get('x-real-ip')
  }

  if (headers.get('x-forwarded-for') && typeof headers.get('x-forwarded-for') === 'string') {
    return headers.get('x-forwarded-for')?.split(/, /)[0].trim() || null
  }

  if (req.ip) {
    return req.ip
  }

  return null
}
