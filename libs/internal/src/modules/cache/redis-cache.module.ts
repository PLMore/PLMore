import {ConsulServiceKeys} from '@ezyfs/internal';
import {cacheSetupFactory} from '@ezyfs/internal/setup/cache.setup';
import {CacheModule, DynamicModule, Module} from '@nestjs/common';
import {ConsulModule, ConsulService} from 'nestjs-consul';
import {CACHE_OPTIONS} from './constants/cache.constants';
import {CacheOptions} from './interfaces/cache-options.interface';
import {RedisCacheService} from './redis-cache.service';

@Module({})
export class RedisCacheModule {
  public static forFeature(options: CacheOptions): DynamicModule {
    return {
      module: RedisCacheModule,
      imports: [
        ConsulModule,
        CacheModule.registerAsync({
          imports: [ConsulModule],
          inject: [ConsulService],
          useFactory: async (consul: ConsulService<any>) =>
            cacheSetupFactory(consul, options.consulKey),
        }),
      ],
      providers: [
        {
          provide: CACHE_OPTIONS,
          useValue: options,
        },
        RedisCacheService,
      ],
      exports: [CACHE_OPTIONS, RedisCacheService],
    };
  }
}
