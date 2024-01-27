import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column({ type: 'date', default: () => 'CURRENT_DATE', nullable: true })
    fecha: Date;

    @Column()
    contenido: string;
}