import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateLineaDeProduccionDto } from './dto/create-linea-de-produccion.dto';
import { UpdateLineaDeProduccionDto } from './dto/update-linea-de-produccion.dto';

import { LineaDeProduccion } from './entities/linea-de-produccion.entity';

@Injectable()
export class LineaDeProduccionService {
    private readonly logger = new Logger('LineaDeProduccionService');

    constructor(
        @InjectRepository(LineaDeProduccion)
        private readonly lineaDeProduccionRepository: Repository<LineaDeProduccion>,

        private readonly dataSource: DataSource,
    ) { }

    async create(createLineaDeProduccionDto: CreateLineaDeProduccionDto) {
        try {
            const lineaDeProduccion = this.lineaDeProduccionRepository.create(createLineaDeProduccionDto);

            await this.lineaDeProduccionRepository.save(lineaDeProduccion);

            return lineaDeProduccion;
        } catch (error) {
            this.handleDBExceptions(error);
        }
    }

    async findAll() {
        const lineasDeProduccion = await this.lineaDeProduccionRepository.find();

        return lineasDeProduccion;
    }

    async findOne(id: string) {
        const lineaDeProduccion = await this.lineaDeProduccionRepository.findOne({
            where: {
                id
            }
        });

        return lineaDeProduccion;
    }

    async update(id: string, updateLineaDeProduccionDto: UpdateLineaDeProduccionDto) {
        await this.lineaDeProduccionRepository.update({ id }, updateLineaDeProduccionDto);

        return this.findOne(id);
    }

    private handleDBExceptions(error: any) {
        if (error.code === '23505') throw new BadRequestException(error.detail);

        this.logger.error(error);
        // console.log(error)
        throw new InternalServerErrorException(
            'Unexpected error, check server logs',
        );
    }
}
