import { PartialType } from '@nestjs/swagger';
import { CreatePlantaDeProduccionDto } from './create-planta-de-produccion.dto';

export class UpdatePlantaDeProduccionDto extends PartialType(CreatePlantaDeProduccionDto) {}
