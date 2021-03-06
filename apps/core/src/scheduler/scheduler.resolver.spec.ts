import {BullModule} from '@nestjs/bull';
import {Test, TestingModule} from '@nestjs/testing';
import {CompressionJobPayload} from './interfaces/CompressionJobPayload.interface';
import {SchedulerResolver} from './scheduler.resolver';
import {SchedulerService} from './scheduler.service';

describe('SchedulerResolver', () => {
  let resolver: SchedulerResolver;
  // const mockQueue: Queue<CompressionJobPayload> | Array<CompressionJobPayload> =
  //   [];
  const mockSchedulerService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedulerResolver, SchedulerService],
      // imports: [BullModule],
    })
      .overrideProvider(SchedulerService)
      .useValue(mockSchedulerService)
      .compile();

    resolver = module.get<SchedulerResolver>(SchedulerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
