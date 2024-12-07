import { PartialType } from '@nestjs/mapped-types';
import { CreatePlantasDeProduccionDto } from './create-plantas-de-produccion.dto';

export class UpdatePlantasDeProduccionDto extends PartialType(CreatePlantasDeProduccionDto) {}
