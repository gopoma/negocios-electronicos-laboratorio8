import { Module } from '@nestjs/common';
import { MaestrosDeMaquinariasService } from './maestros-de-maquinarias.service';
import { MaestrosDeMaquinariasController } from './maestros-de-maquinarias.controller';

@Module({
  controllers: [MaestrosDeMaquinariasController],
  providers: [MaestrosDeMaquinariasService],
})
export class MaestrosDeMaquinariasModule {}
