import { Test, TestingModule } from '@nestjs/testing';
import { ApostlesController } from '../src/modules/apostles/apostles.controller';

describe('Apostles Controller', () => {
  let controller: ApostlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApostlesController],
    }).compile();

    controller = module.get<ApostlesController>(ApostlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
