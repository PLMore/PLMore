import {ConsulConfigModule, ConsulServiceKeys} from '@ezyfs/internal';
import {NotificationsConfig} from '@ezyfs/internal/interfaces/configs/notifications.config';
import {dbConnectionFactory, Email, User} from '@ezyfs/repositories';
import {BullModule} from '@nestjs/bull';
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConsulService} from 'nestjs-consul';
import {EmailsModule} from './email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConsulConfigModule],
      useFactory: (consul) =>
        dbConnectionFactory(
          consul,
          ConsulServiceKeys.NOTIFICATIONS,
          '/dist/apps/notifications/libs/repositories/src/**/*.entity{.ts,.js}',
        ),
      inject: [ConsulService],
    }),

    TypeOrmModule.forFeature([Email]),
    EmailsModule,
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class NotificationsModule {}
