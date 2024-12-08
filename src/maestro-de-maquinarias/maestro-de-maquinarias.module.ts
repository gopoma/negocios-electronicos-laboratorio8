import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MaestroDeMaquinaria } from './entities/maestro-de-maquinaria.entity';

import { MaestroDeMaquinariasService } from './maestro-de-maquinarias.service';
import { MaestroDeMaquinariasController } from './maestro-de-maquinarias.controller';

@Module({
    controllers: [MaestroDeMaquinariasController],
    providers: [MaestroDeMaquinariasService],
    imports: [TypeOrmModule.forFeature([MaestroDeMaquinaria])],
    exports: [TypeOrmModule],
})
export class MaestroDeMaquinariasModule { }
