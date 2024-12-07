import { Injectable } from '@nestjs/common';
import { CreatePlantasDeProduccionDto } from './dto/create-plantas-de-produccion.dto';
import { UpdatePlantasDeProduccionDto } from './dto/update-plantas-de-produccion.dto';

@Injectable()
export class PlantasDeProduccionService {
  create(createPlantasDeProduccionDto: CreatePlantasDeProduccionDto) {
    return 'This action adds a new plantasDeProduccion';
  }

  findAll() {
    return `This action returns all plantasDeProduccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plantasDeProduccion`;
  }

  update(id: number, updatePlantasDeProduccionDto: UpdatePlantasDeProduccionDto) {
    return `This action updates a #${id} plantasDeProduccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} plantasDeProduccion`;
  }
}
