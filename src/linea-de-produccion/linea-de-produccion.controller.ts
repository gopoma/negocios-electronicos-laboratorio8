import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineaDeProduccionService } from './linea-de-produccion.service';
import { CreateLineaDeProduccionDto } from './dto/create-linea-de-produccion.dto';
import { UpdateLineaDeProduccionDto } from './dto/update-linea-de-produccion.dto';

@Controller('linea-de-produccion')
export class LineaDeProduccionController {
    constructor(private readonly lineaDeProduccionService: LineaDeProduccionService) { }

    @Post()
    create(@Body() createLineaDeProduccionDto: CreateLineaDeProduccionDto) {
        return this.lineaDeProduccionService.create(createLineaDeProduccionDto);
    }

    @Get()
    findAll() {
        return this.lineaDeProduccionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.lineaDeProduccionService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLineaDeProduccionDto: UpdateLineaDeProduccionDto) {
        return this.lineaDeProduccionService.update(id, updateLineaDeProduccionDto);
    }
}
