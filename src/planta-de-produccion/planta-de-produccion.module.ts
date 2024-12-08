import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlantaDeProduccion } from './entities/planta-de-produccion.entity';

import { PlantaDeProduccionService } from './planta-de-produccion.service';
import { PlantaDeProduccionController } from './planta-de-produccion.controller';

@Module({
    controllers: [PlantaDeProduccionController],
    providers: [PlantaDeProduccionService],
    imports: [TypeOrmModule.forFeature([PlantaDeProduccion])],
    exports: [TypeOrmModule],
})
export class PlantaDeProduccionModule { }
