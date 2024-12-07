import { Module } from '@nestjs/common';
import { LineasDeProduccionService } from './lineas-de-produccion.service';
import { LineasDeProduccionController } from './lineas-de-produccion.controller';

@Module({
  controllers: [LineasDeProduccionController],
  providers: [LineasDeProduccionService],
})
export class LineasDeProduccionModule {}
