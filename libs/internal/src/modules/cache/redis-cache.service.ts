import {CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import {Cache} from 'cache-manager';
import {CACHE_OPTIONS} from './constants/cache.constants';
import {CacheOptions} from './interfaces/cache-options.interface';

@Injectable()
export class RedisCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    @Inject(CACHE_OPTIONS) private readonly cacheOptions: CacheOptions,
  ) {}

  prefix = this.cacheOptions.prefix;

  ttl = this.cacheOptions.ttl;

  async get(key: string): Promise<any> {
    return this.cache.get(this.prefix + key);
  }

  async set(key, value) {
    await this.cache.set(this.prefix + key, value, {ttl: this.ttl});
  }

  async reset() {
    await this.cache.reset();
  }

  async del(key) {
    await this.cache.del(this.prefix + key);
  }
}
