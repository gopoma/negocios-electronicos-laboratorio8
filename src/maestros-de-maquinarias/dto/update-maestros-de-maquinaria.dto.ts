import { PartialType } from '@nestjs/mapped-types';
import { CreateMaestrosDeMaquinariaDto } from './create-maestros-de-maquinaria.dto';

export class UpdateMaestrosDeMaquinariaDto extends PartialType(CreateMaestrosDeMaquinariaDto) {}
