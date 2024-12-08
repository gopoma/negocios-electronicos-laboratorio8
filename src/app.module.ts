import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

import { CommonModule } from './common/common.module';
import { LineaDeProduccionModule } from './linea-de-produccion/linea-de-produccion.module';
import { PlantaDeProduccionModule } from './planta-de-produccion/planta-de-produccion.module';
import { MaestroDeMaquinariasModule } from './maestro-de-maquinarias/maestro-de-maquinarias.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [EnvConfiguration],
            validationSchema: JoiValidationSchema,
        }),

        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            autoLoadEntities: true,
            synchronize: true,
            ssl: { rejectUnauthorized: false }
        }),

        CommonModule,

        LineaDeProduccionModule,

        PlantaDeProduccionModule,

        MaestroDeMaquinariasModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
