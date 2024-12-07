import { Test, TestingModule } from '@nestjs/testing';
import { PlantasDeProduccionService } from './plantas-de-produccion.service';

describe('PlantasDeProduccionService', () => {
  let service: PlantasDeProduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantasDeProduccionService],
    }).compile();

    service = module.get<PlantasDeProduccionService>(PlantasDeProduccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
