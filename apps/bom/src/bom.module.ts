import { Module } from '@nestjs/common';
import { BomController } from './bom.controller';
import { BomService } from './bom.service';

@Module({
  imports: [],
  controllers: [BomController],
  providers: [BomService],
})
export class BomModule {}
