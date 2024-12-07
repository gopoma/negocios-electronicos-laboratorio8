import { Injectable } from '@nestjs/common';
import { CreateLineasDeProduccionDto } from './dto/create-lineas-de-produccion.dto';
import { UpdateLineasDeProduccionDto } from './dto/update-lineas-de-produccion.dto';

@Injectable()
export class LineasDeProduccionService {
  create(createLineasDeProduccionDto: CreateLineasDeProduccionDto) {
    return 'This action adds a new lineasDeProduccion';
  }

  findAll() {
    return `This action returns all lineasDeProduccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineasDeProduccion`;
  }

  update(id: number, updateLineasDeProduccionDto: UpdateLineasDeProduccionDto) {
    return `This action updates a #${id} lineasDeProduccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineasDeProduccion`;
  }
}
