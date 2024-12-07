import { Module } from '@nestjs/common';
import { PlantasDeProduccionService } from './plantas-de-produccion.service';
import { PlantasDeProduccionController } from './plantas-de-produccion.controller';

@Module({
  controllers: [PlantasDeProduccionController],
  providers: [PlantasDeProduccionService],
})
export class PlantasDeProduccionModule {}
