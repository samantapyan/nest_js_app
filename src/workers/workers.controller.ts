import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './worker.dto';

@Controller('workers')
export class WorkersController {
  constructor(private workerService: WorkersService) {}

  @Get()
  getWorkers() {
    return this.workerService.getWorkers();
  }
  @Post()
  createWorker(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.createWorker(createWorkerDto);
  }
}
