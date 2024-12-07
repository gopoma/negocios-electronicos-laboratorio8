import { Injectable } from '@nestjs/common';
import { CreateMaestrosDeMaquinariaDto } from './dto/create-maestros-de-maquinaria.dto';
import { UpdateMaestrosDeMaquinariaDto } from './dto/update-maestros-de-maquinaria.dto';

@Injectable()
export class MaestrosDeMaquinariasService {
  create(createMaestrosDeMaquinariaDto: CreateMaestrosDeMaquinariaDto) {
    return 'This action adds a new maestrosDeMaquinaria';
  }

  findAll() {
    return `This action returns all maestrosDeMaquinarias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maestrosDeMaquinaria`;
  }

  update(id: number, updateMaestrosDeMaquinariaDto: UpdateMaestrosDeMaquinariaDto) {
    return `This action updates a #${id} maestrosDeMaquinaria`;
  }

  remove(id: number) {
    return `This action removes a #${id} maestrosDeMaquinaria`;
  }
}
