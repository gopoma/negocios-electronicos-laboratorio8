import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlantasDeProduccionService } from './plantas-de-produccion.service';
import { CreatePlantasDeProduccionDto } from './dto/create-plantas-de-produccion.dto';
import { UpdatePlantasDeProduccionDto } from './dto/update-plantas-de-produccion.dto';

@Controller('plantas-de-produccion')
export class PlantasDeProduccionController {
  constructor(private readonly plantasDeProduccionService: PlantasDeProduccionService) {}

  @Post()
  create(@Body() createPlantasDeProduccionDto: CreatePlantasDeProduccionDto) {
    return this.plantasDeProduccionService.create(createPlantasDeProduccionDto);
  }

  @Get()
  findAll() {
    return this.plantasDeProduccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantasDeProduccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantasDeProduccionDto: UpdatePlantasDeProduccionDto) {
    return this.plantasDeProduccionService.update(+id, updatePlantasDeProduccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantasDeProduccionService.remove(+id);
  }
}
