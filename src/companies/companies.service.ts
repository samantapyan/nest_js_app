import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Company} from "./company";

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}

  createCompany(company) {

    const companyData = this.companyRepository.create({
      ...company,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    console.log("xxxxxxxxxxxxxxxxx",companyData);
    return this.companyRepository.save(companyData)
  }

}
