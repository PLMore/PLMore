import {ConsulServiceKeys, microserviceSetup} from '@ezyfs/internal';
import {NotificationsModule} from './notifications.module';

async function bootstrap() {
  microserviceSetup(
    NotificationsModule,
    '/libs/proto-schema/src/proto/notifications.proto',
    ConsulServiceKeys.NOTIFICATIONS,
    {
      enableMqtt: false,
      enableNats: false,
    },
  );
}
bootstrap();
