import { Test, TestingModule } from '@nestjs/testing';
import { LineasDeProduccionService } from './lineas-de-produccion.service';

describe('LineasDeProduccionService', () => {
  let service: LineasDeProduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineasDeProduccionService],
    }).compile();

    service = module.get<LineasDeProduccionService>(LineasDeProduccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
