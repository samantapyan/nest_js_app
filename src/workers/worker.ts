import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "workers"})
export class Worker {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  companyId: number;

  @Column({unique: true})
  name: string;

  @Column()
  surname: string;

  @Column()
  phone: string;
}
