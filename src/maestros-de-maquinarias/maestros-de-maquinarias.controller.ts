import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaestrosDeMaquinariasService } from './maestros-de-maquinarias.service';
import { CreateMaestrosDeMaquinariaDto } from './dto/create-maestros-de-maquinaria.dto';
import { UpdateMaestrosDeMaquinariaDto } from './dto/update-maestros-de-maquinaria.dto';

@Controller('maestros-de-maquinarias')
export class MaestrosDeMaquinariasController {
  constructor(private readonly maestrosDeMaquinariasService: MaestrosDeMaquinariasService) {}

  @Post()
  create(@Body() createMaestrosDeMaquinariaDto: CreateMaestrosDeMaquinariaDto) {
    return this.maestrosDeMaquinariasService.create(createMaestrosDeMaquinariaDto);
  }

  @Get()
  findAll() {
    return this.maestrosDeMaquinariasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maestrosDeMaquinariasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaestrosDeMaquinariaDto: UpdateMaestrosDeMaquinariaDto) {
    return this.maestrosDeMaquinariasService.update(+id, updateMaestrosDeMaquinariaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maestrosDeMaquinariasService.remove(+id);
  }
}
