import { Test, TestingModule } from '@nestjs/testing';
import { LineasDeProduccionController } from './lineas-de-produccion.controller';
import { LineasDeProduccionService } from './lineas-de-produccion.service';

describe('LineasDeProduccionController', () => {
  let controller: LineasDeProduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LineasDeProduccionController],
      providers: [LineasDeProduccionService],
    }).compile();

    controller = module.get<LineasDeProduccionController>(LineasDeProduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
