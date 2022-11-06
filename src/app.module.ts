import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from './workers/worker';
import { Company } from './companies/company';
import { Contact } from './contacts/contact';
import { CompaniesModule } from './companies/companies.module';
import { WorkersModule } from './workers/workers.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '1111',
      database: 'nest_js_tutorial',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Worker, Company, Contact],
    }),
    CompaniesModule,
    WorkersModule,
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
