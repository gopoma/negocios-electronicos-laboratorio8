import { Test, TestingModule } from '@nestjs/testing';
import { MaestrosDeMaquinariasService } from './maestros-de-maquinarias.service';

describe('MaestrosDeMaquinariasService', () => {
  let service: MaestrosDeMaquinariasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaestrosDeMaquinariasService],
    }).compile();

    service = module.get<MaestrosDeMaquinariasService>(MaestrosDeMaquinariasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
