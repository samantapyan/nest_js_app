import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Worker } from '../workers/worker';
import { QueryFields } from '../utils/query.fields';

@Entity({ name: 'contacts' })
export class Contact extends QueryFields {
  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  zip: string;

  @Column({ type: 'bigint' })
  workerId: number;

  // Relations
  @OneToOne(() => Worker, (worker) => worker.contact)
  @JoinColumn()
  worker: Worker;
}
