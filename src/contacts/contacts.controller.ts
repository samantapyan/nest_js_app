import { Body, Controller, Post } from '@nestjs/common';
import { CreateContactDto } from './contact.dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Post()
  createCompany(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }
}
