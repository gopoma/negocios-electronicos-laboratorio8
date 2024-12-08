import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { EstadoDeRegistro } from "../../common/interfaces/estado-de-registro";
import { LineaDeProduccion } from "src/linea-de-produccion/entities/linea-de-produccion.entity";
import { PlantaDeProduccion } from './../../planta-de-produccion/entities/planta-de-produccion.entity';

@Entity({ name: "MaestroDeMaquinaria" })
export class MaestroDeMaquinaria {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text", {
        unique: true,
    })
    codigo: string;

    @Column("text")
    nombre: string;

    @ManyToOne(() => LineaDeProduccion, (lineaDeProduccion) => lineaDeProduccion.maestroDeMaquinaria, {
        onDelete: 'CASCADE',
        cascade: true,
        eager: true
    })
    lineaDeProduccion: LineaDeProduccion;

    @ManyToOne(() => PlantaDeProduccion, (plantaDeProduccion) => plantaDeProduccion.maestroDeMaquinaria, {
        onDelete: 'CASCADE',
        cascade: true,
        eager: true
    })
    plantaDeProduccion: PlantaDeProduccion;

    @Column("text")
    ubicacion: string;

    @Column({
        type: "enum",
        enum: EstadoDeRegistro,
        default: EstadoDeRegistro.activo
    })
    estadoDeRegistro: string;
}
