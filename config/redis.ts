import * as process from 'process'

export const REDIS_HOST: string = process.env.REDIS_HOST || 'localhost'

export const REDIS_PORT: number = parseInt(process.env.REDIS_PORT || '6379')

export const REDIS_DATABASE: number = parseInt(process.env.REDIS_DB || '0')
