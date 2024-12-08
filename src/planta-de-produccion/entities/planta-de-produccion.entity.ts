import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

import { EstadoDeRegistro } from "../../common/interfaces/estado-de-registro";
import { MaestroDeMaquinaria } from "src/maestro-de-maquinarias/entities/maestro-de-maquinaria.entity";

@Entity({ name: "PlantaDeProduccion" })
export class PlantaDeProduccion {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text", {
        unique: true,
    })
    codigo: string;

    @Column("text")
    nombre: string;

    @Column({
        type: "enum",
        enum: EstadoDeRegistro,
        default: EstadoDeRegistro.activo
    })
    estadoDeRegistro: string;

    @OneToMany(() => MaestroDeMaquinaria, (plantaDeProduccion) => plantaDeProduccion.lineaDeProduccion)
    maestroDeMaquinaria: MaestroDeMaquinaria;
}
