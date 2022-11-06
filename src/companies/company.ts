import { Column, Entity } from 'typeorm';
import { QueryFields } from '../utils/query.fields';

@Entity({ name: 'companies' })
export class Company extends QueryFields {
  @Column({ unique: true })
  name: string;

  @Column()
  type: string;

  worker: Worker[];
}
