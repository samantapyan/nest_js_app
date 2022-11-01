import {Body, Controller, Get, Post} from '@nestjs/common';
import {CompaniesService} from "./companies.service";
import {CreateCompanyDto} from "./company.dto";

@Controller('companies')
export class CompaniesController {
  constructor(private companyService: CompaniesService){}

  @Get()
  getCompanies(){}

  @Post()
  createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

}
