import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './app.model';
import { PrismaService } from './Database/prisma.service';

@Injectable()
export class AppService{
  constructor(private prisma:PrismaService){}

  async getTask() { 
    return this.prisma.task.findMany()
  }

  async createTask(data: CreateTaskInput) { 
    return this.prisma.task.create({data})
  }
}
