import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateMaestroDeMaquinariaDto } from './dto/create-maestro-de-maquinaria.dto';
import { UpdateMaestroDeMaquinariaDto } from './dto/update-maestro-de-maquinaria.dto';

import { MaestroDeMaquinaria } from './entities/maestro-de-maquinaria.entity';

@Injectable()
export class MaestroDeMaquinariasService {
    private readonly logger = new Logger('MaestroDeMaquinariasService');

    constructor(
        @InjectRepository(MaestroDeMaquinaria)
        private readonly maestroDeMaquinariaRepository: Repository<MaestroDeMaquinaria>,

        private readonly dataSource: DataSource,
    ) { }

    async create(createMaestroDeMaquinariaDto: CreateMaestroDeMaquinariaDto) {
        try {
            const maestroDeMaquinaria = this.maestroDeMaquinariaRepository.create(createMaestroDeMaquinariaDto);

            await this.maestroDeMaquinariaRepository.save(maestroDeMaquinaria);

            return maestroDeMaquinaria;
        } catch (error) {
            this.handleDBExceptions(error);
        }
    }

    async findAll() {
        const maestrosDeMaquinaria = await this.maestroDeMaquinariaRepository.find();

        return maestrosDeMaquinaria;
    }

    async findOne(id: string) {
        const maestroDeMaquinaria = await this.maestroDeMaquinariaRepository.findOne({
            where: {
                id
            }
        });

        return maestroDeMaquinaria;
    }

    async update(id: string, updateMaestroDeMaquinariaDto: UpdateMaestroDeMaquinariaDto) {
        await this.maestroDeMaquinariaRepository.update({ id }, updateMaestroDeMaquinariaDto);

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
