import { Injectable } from '@nestjs/common';
import { task } from '@prisma/client';
import { PrismaService } from './Database/prisma.service';

@Injectable()
export class AppService{
  constructor(private prisma:PrismaService){}
  async getTask() { 
    return this.prisma.task.findMany()
  }
}
