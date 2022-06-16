import { Test, TestingModule } from '@nestjs/testing';
import { BomController } from './bom.controller';
import { BomService } from './bom.service';

describe('BomController', () => {
  let bomController: BomController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BomController],
      providers: [BomService],
    }).compile();

    bomController = app.get<BomController>(BomController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bomController.getHello()).toBe('Hello World!');
    });
  });
});
