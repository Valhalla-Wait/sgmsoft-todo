import { Injectable } from '@nestjs/common';
import { CreateTaskInput, IDTaskInput,UpdateTaskInput,filterTaskInput } from './app.model';
import { PrismaService } from './Database/prisma.service';

@Injectable()
export class AppService{
  constructor(private prisma:PrismaService){}

  async getTasks() { 
    return this.prisma.task.findMany()
  }

  async getTask(data: IDTaskInput) { 
    return this.prisma.task.findUnique({
      where: data
    })
  }

  async filterTask({status}: filterTaskInput) { 
    return this.prisma.task.findMany({
      where: {
        status: status
      }
    })
  }

  async createTask(data: CreateTaskInput) { 
    return this.prisma.task.create({data})
  }

  async deleteTask(data: IDTaskInput) { 
    return this.prisma.task.delete({
      where: data
    })
  }

async updateTask({id, name,description,expires,status} : UpdateTaskInput) { 
    return this.prisma.task.update({
      where: {id}, 
      data:{
        name: name,
        description:description,
        expires:expires,
        status:status
      }

    })
  }
}
