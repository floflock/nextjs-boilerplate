import Redis from 'ioredis'
import RedisClient from '@/src/redis/RedisClient'

export default class RedisCache {
  private readonly instance: Redis | undefined
  private readonly environment: string = 'dev'

  constructor() {
    this.instance = new RedisClient().instance
    this.environment = process.env.NODE_ENV.substring(0, 3).toLowerCase()
  }

  async set<T>(key: string, value: T, secondsToken?: number) {
    if (typeof value != 'object') {
      new Error('Cannot handle cache object. Is it a object?')
    }

    if (!this.instance) {
      return JSON.stringify(value)
    }

    return this.instance.set(`${this.environment}-${key}`, Buffer.from(JSON.stringify(value)), 'EX', secondsToken ?? 86400)
  }

  async get<T>(key: string) {
    if (!this.instance) {
      return null
    }

    const payload = await this.instance.get(`${this.environment}-${key}`)

    if (payload === null) {
      return payload
    }

    return JSON.parse(payload) as T
  }
}
