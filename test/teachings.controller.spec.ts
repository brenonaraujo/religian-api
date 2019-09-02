import { Test, TestingModule } from '@nestjs/testing';
import { TeachingsController } from '../src/app/teachings/teachings.controller';

describe('Teachings Controller', () => {
  let controller: TeachingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeachingsController],
    }).compile();

    controller = module.get<TeachingsController>(TeachingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
