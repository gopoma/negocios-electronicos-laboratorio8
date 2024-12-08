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

export class CreatePlantaDeProduccionDto {
    @IsString()
    @MinLength(1)
    codigo: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsEnum(EstadoDeRegistro)
    @IsOptional()
    estadoDeRegistro: EstadoDeRegistro;
}
