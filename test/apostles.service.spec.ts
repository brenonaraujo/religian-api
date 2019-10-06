import { Test, TestingModule } from '@nestjs/testing';
import { ApostlesService } from '../src/app/apostles/apostles.service';

describe('ApostlesService', () => {
  let service: ApostlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApostlesService],
    }).compile();

    service = module.get<ApostlesService>(ApostlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
