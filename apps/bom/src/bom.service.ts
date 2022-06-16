import { Injectable } from '@nestjs/common';

@Injectable()
export class BomService {
  getHello(): string {
    return 'Hello World!';
  }
}
