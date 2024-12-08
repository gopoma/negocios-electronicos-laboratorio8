import {
    IsArray,
    IsEnum,
    IsIn,
    IsInt,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MinLength,
} from 'class-validator';

import { EstadoDeRegistro } from 'src/common/interfaces/estado-de-registro';
import { LineaDeProduccion } from 'src/linea-de-produccion/entities/linea-de-produccion.entity';
import { PlantaDeProduccion } from 'src/planta-de-produccion/entities/planta-de-produccion.entity';

export class CreateMaestroDeMaquinariaDto {
    @IsString()
    @MinLength(1)
    codigo: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    lineaDeProduccion: LineaDeProduccion;

    @IsString()
    @MinLength(1)
    plantaDeProduccion: PlantaDeProduccion;

    @IsString()
    @MinLength(1)
    ubicacion: string;

    @IsEnum(EstadoDeRegistro)
    @IsOptional()
    estadoDeRegistro: string;
}
