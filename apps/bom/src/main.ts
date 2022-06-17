import { ConsulServiceKeys, microserviceSetup } from '@ezyfs/internal';
import { NestFactory } from '@nestjs/core';
import { BomModule } from './bom.module';

async function bootstrap() {
  microserviceSetup(
    BomModule,
    '/libs/proto-schema/src/proto/bom.proto',
    ConsulServiceKeys.BOM,
    {
      enableMqtt: false,
      enableNats: false,
    }
  )
}
bootstrap();
