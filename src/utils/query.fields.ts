import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class QueryFields {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
