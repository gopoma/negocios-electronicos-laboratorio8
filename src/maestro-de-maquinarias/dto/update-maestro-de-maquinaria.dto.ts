import { PartialType } from '@nestjs/swagger';
import { CreateMaestroDeMaquinariaDto } from './create-maestro-de-maquinaria.dto';

export class UpdateMaestroDeMaquinariaDto extends PartialType(CreateMaestroDeMaquinariaDto) {}
