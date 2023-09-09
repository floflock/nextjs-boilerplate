import Redis from 'ioredis'
import { REDIS_DATABASE, REDIS_HOST, REDIS_PORT } from '@/config/redis'

export default class RedisClient {
  private readonly _instance: Redis | undefined

  constructor() {
    this._instance = undefined

    if (REDIS_HOST != '') {
      this._instance = new Redis({
        host: REDIS_HOST,
        port: REDIS_PORT,
        db: REDIS_DATABASE
      })
    }
  }

  get instance(): Redis | undefined {
    return this._instance
  }
}
