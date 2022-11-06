import { Injectable } from '@nestjs/common';
import { CreateWorkerParams } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Worker } from './worker';
import { Repository } from 'typeorm';

@Injectable()
export class WorkersService {
  constructor(
    @InjectRepository(Worker) private workerRepository: Repository<Worker>,
  ) {}

  getWorkers() {
    return this.workerRepository.find({
      relations: {
        contact: true,
      },
    });
  }

  createWorker(userDetails: CreateWorkerParams) {
    const newWorker = this.workerRepository.create({
      ...userDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.workerRepository.save(newWorker);
  }
}
