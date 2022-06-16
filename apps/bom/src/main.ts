import { NestFactory } from '@nestjs/core';
import { BomModule } from './bom.module';

async function bootstrap() {
  const app = await NestFactory.create(BomModule);
  await app.listen(3000);
}
bootstrap();
