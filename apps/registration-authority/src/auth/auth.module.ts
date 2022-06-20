import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '@ezyfs/repositories/entities/users/user.entity';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {RedisCacheModule} from '@ezyfs/internal/modules/cache/redis-cache.module';
import {
  ConsulConfigModule,
  ConsulServiceKeys,
  RegistrationAuthorityConfig,
} from '@ezyfs/internal';
import {ConsulService} from 'nestjs-consul';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {MicrosCachePrefix} from '@ezyfs/internal/modules/cache/constants/micros-cache-prefix.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConsulConfigModule],
      inject: [ConsulService],
      useFactory: async (
        consul: ConsulService<RegistrationAuthorityConfig>,
      ) => {
        const config = await consul.get<RegistrationAuthorityConfig>(
          ConsulServiceKeys.REGISTRATION_AUTHORITY,
        );
        return {
          secret: config.auth.jwtSettings.jwtSecret,
          signOptions: {
            expiresIn: config.auth.jwtSettings.expiresIn,
          },
        };
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    RedisCacheModule.forFeature({
      prefix: MicrosCachePrefix.REGISAUTH + 'auth-',
      ttl: 60 * 60 * 24 * 7,
      consulKey: ConsulServiceKeys.REGISTRATION_AUTHORITY,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'ConsulSync',
      useFactory: async (consul: ConsulService<RegistrationAuthorityConfig>) =>
        consul.get<RegistrationAuthorityConfig>(
          ConsulServiceKeys.REGISTRATION_AUTHORITY,
        ),
      inject: [ConsulService],
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
