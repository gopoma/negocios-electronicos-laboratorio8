import { PartialType } from '@nestjs/swagger';
import { CreateLineaDeProduccionDto } from './create-linea-de-produccion.dto';

export class UpdateLineaDeProduccionDto extends PartialType(CreateLineaDeProduccionDto) {}
