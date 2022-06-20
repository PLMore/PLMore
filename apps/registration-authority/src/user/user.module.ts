import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '@ezyfs/repositories/entities';
import {RedisCacheModule} from '@ezyfs/internal/modules/cache/redis-cache.module';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {join} from 'path';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {AuthModule} from '../auth/auth.module';
import {GrpcGenericClientModule} from '@ezyfs/internal/grpc-clients/grpc-generic-client.module';
import {GrpcToken} from '@ezyfs/internal/grpc-clients/types';
import {MicrosCachePrefix} from '@ezyfs/internal/modules/cache/constants/micros-cache-prefix.enum';
import {ConsulServiceKeys} from '@ezyfs/internal';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RedisCacheModule.forFeature({
      prefix: MicrosCachePrefix + 'user-',
      ttl: 60 * 60 * 24 * 7,
      consulKey: ConsulServiceKeys.REGISTRATION_AUTHORITY,
    }),
    AuthModule,
    GrpcGenericClientModule.registerAsync({
      servicesList: [GrpcToken.NOTIFICATIONS],
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
