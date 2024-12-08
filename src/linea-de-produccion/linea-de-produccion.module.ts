import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LineaDeProduccion } from "./entities/linea-de-produccion.entity";

import { LineaDeProduccionService } from './linea-de-produccion.service';
import { LineaDeProduccionController } from './linea-de-produccion.controller';

@Module({
  controllers: [LineaDeProduccionController],
  providers: [LineaDeProduccionService],
  imports: [TypeOrmModule.forFeature([LineaDeProduccion])],
  exports: [TypeOrmModule],
})
export class LineaDeProduccionModule {}
