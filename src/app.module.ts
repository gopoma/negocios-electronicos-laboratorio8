import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineasDeProduccionModule } from './lineas-de-produccion/lineas-de-produccion.module';
import { PlantasDeProduccionModule } from './plantas-de-produccion/plantas-de-produccion.module';
import { MaestrosDeMaquinariasModule } from './maestros-de-maquinarias/maestros-de-maquinarias.module';

@Module({
  imports: [LineasDeProduccionModule, PlantasDeProduccionModule, MaestrosDeMaquinariasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
