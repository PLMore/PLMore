import { Controller, Get } from '@nestjs/common';
import { BomService } from './bom.service';

@Controller()
export class BomController {
  constructor(private readonly bomService: BomService) {}

  @Get()
  getHello(): string {
    return this.bomService.getHello();
  }
}
