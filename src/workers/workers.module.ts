import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from '../workers/worker';

@Module({
  imports: [TypeOrmModule.forFeature([Worker])],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
