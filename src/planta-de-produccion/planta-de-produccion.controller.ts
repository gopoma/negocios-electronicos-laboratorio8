import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlantaDeProduccionService } from './planta-de-produccion.service';
import { CreatePlantaDeProduccionDto } from './dto/create-planta-de-produccion.dto';
import { UpdatePlantaDeProduccionDto } from './dto/update-planta-de-produccion.dto';

@Controller('planta-de-produccion')
export class PlantaDeProduccionController {
    constructor(private readonly plantaDeProduccionService: PlantaDeProduccionService) { }

    @Post()
    create(@Body() createPlantaDeProduccionDto: CreatePlantaDeProduccionDto) {
        return this.plantaDeProduccionService.create(createPlantaDeProduccionDto);
    }

    @Get()
    findAll() {
        return this.plantaDeProduccionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.plantaDeProduccionService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePlantaDeProduccionDto: UpdatePlantaDeProduccionDto) {
        return this.plantaDeProduccionService.update(id, updatePlantaDeProduccionDto);
    }
}
