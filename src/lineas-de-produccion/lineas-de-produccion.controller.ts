import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineasDeProduccionService } from './lineas-de-produccion.service';
import { CreateLineasDeProduccionDto } from './dto/create-lineas-de-produccion.dto';
import { UpdateLineasDeProduccionDto } from './dto/update-lineas-de-produccion.dto';

@Controller('lineas-de-produccion')
export class LineasDeProduccionController {
  constructor(private readonly lineasDeProduccionService: LineasDeProduccionService) {}

  @Post()
  create(@Body() createLineasDeProduccionDto: CreateLineasDeProduccionDto) {
    return this.lineasDeProduccionService.create(createLineasDeProduccionDto);
  }

  @Get()
  findAll() {
    return this.lineasDeProduccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineasDeProduccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLineasDeProduccionDto: UpdateLineasDeProduccionDto) {
    return this.lineasDeProduccionService.update(+id, updateLineasDeProduccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineasDeProduccionService.remove(+id);
  }
}
