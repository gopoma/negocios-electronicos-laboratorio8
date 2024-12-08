import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaestroDeMaquinariasService } from './maestro-de-maquinarias.service';
import { CreateMaestroDeMaquinariaDto } from './dto/create-maestro-de-maquinaria.dto';
import { UpdateMaestroDeMaquinariaDto } from './dto/update-maestro-de-maquinaria.dto';

@Controller('maestro-de-maquinarias')
export class MaestroDeMaquinariasController {
    constructor(private readonly maestroDeMaquinariasService: MaestroDeMaquinariasService) { }

    @Post()
    create(@Body() createMaestroDeMaquinariaDto: CreateMaestroDeMaquinariaDto) {
        return this.maestroDeMaquinariasService.create(createMaestroDeMaquinariaDto);
    }

    @Get()
    findAll() {
        return this.maestroDeMaquinariasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.maestroDeMaquinariasService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMaestroDeMaquinariaDto: UpdateMaestroDeMaquinariaDto) {
        return this.maestroDeMaquinariasService.update(id, updateMaestroDeMaquinariaDto);
    }
}
