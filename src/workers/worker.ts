import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Company } from '../companies/company';
import { Contact } from '../contacts/contact';
import { QueryFields } from '../utils/query.fields';

@Entity({ name: 'workers' })
export class Worker extends QueryFields {
  @Column({ type: 'bigint' })
  companyId: number;

  @Column({ unique: true })
  name: string;

  @Column()
  surname: string;

  @Column()
  phone: string;

  // Relations
  @ManyToOne(() => Company, (company) => company.worker)
  company: Company;

  @OneToOne(() => Contact, (contact) => contact.worker)
  @JoinColumn()
  contact: Contact;
}
