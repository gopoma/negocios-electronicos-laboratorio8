import { Test, TestingModule } from '@nestjs/testing';
import { MaestrosDeMaquinariasController } from './maestros-de-maquinarias.controller';
import { MaestrosDeMaquinariasService } from './maestros-de-maquinarias.service';

describe('MaestrosDeMaquinariasController', () => {
  let controller: MaestrosDeMaquinariasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaestrosDeMaquinariasController],
      providers: [MaestrosDeMaquinariasService],
    }).compile();

    controller = module.get<MaestrosDeMaquinariasController>(MaestrosDeMaquinariasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
