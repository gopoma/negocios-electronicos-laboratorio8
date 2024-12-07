import { PartialType } from '@nestjs/mapped-types';
import { CreateLineasDeProduccionDto } from './create-lineas-de-produccion.dto';

export class UpdateLineasDeProduccionDto extends PartialType(CreateLineasDeProduccionDto) {}
