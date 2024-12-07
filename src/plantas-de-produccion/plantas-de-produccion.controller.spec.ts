import { Test, TestingModule } from '@nestjs/testing';
import { PlantasDeProduccionController } from './plantas-de-produccion.controller';
import { PlantasDeProduccionService } from './plantas-de-produccion.service';

describe('PlantasDeProduccionController', () => {
  let controller: PlantasDeProduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantasDeProduccionController],
      providers: [PlantasDeProduccionService],
    }).compile();

    controller = module.get<PlantasDeProduccionController>(PlantasDeProduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
