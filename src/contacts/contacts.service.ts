import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
  ) {}

  createContact(contact) {
    const contactData = this.contactRepository.create({
      ...contact,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.contactRepository.save(contactData);
  }
}
