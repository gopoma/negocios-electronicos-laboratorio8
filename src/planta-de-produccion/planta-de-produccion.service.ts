import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreatePlantaDeProduccionDto } from './dto/create-planta-de-produccion.dto';
import { UpdatePlantaDeProduccionDto } from './dto/update-planta-de-produccion.dto';

import { PlantaDeProduccion } from './entities/planta-de-produccion.entity';

@Injectable()
export class PlantaDeProduccionService {
    private readonly logger = new Logger('PlantaDeProduccionService');

    constructor(
        @InjectRepository(PlantaDeProduccion)
        private readonly plantaDeProduccionRepository: Repository<PlantaDeProduccion>,

        private readonly dataSource: DataSource,
    ) { }

    async create(createPlantaDeProduccionDto: CreatePlantaDeProduccionDto) {
        try {
            const plantaDeProduccion = this.plantaDeProduccionRepository.create(createPlantaDeProduccionDto);

            await this.plantaDeProduccionRepository.save(plantaDeProduccion);

            return plantaDeProduccion;
        } catch (error) {
            this.handleDBExceptions(error);
        }
    }

    async findAll() {
        const plantasDeProduccion = await this.plantaDeProduccionRepository.find();

        return plantasDeProduccion;
    }

    async findOne(id: string) {
        const plantaDeProduccion = await this.plantaDeProduccionRepository.findOne({
            where: {
                id
            }
        });

        return plantaDeProduccion;
    }

    async update(id: string, updatePlantaDeProduccionDto: UpdatePlantaDeProduccionDto) {
        await this.plantaDeProduccionRepository.update({ id }, updatePlantaDeProduccionDto);

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
