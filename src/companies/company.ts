import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "companies"})
export class Company {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({unique: true})
  name: string;

  @Column()
  type: string;
}
