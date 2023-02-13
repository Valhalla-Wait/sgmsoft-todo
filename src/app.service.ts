import { Injectable } from '@nestjs/common';
import { CreateTaskInput, DeleteTaskInput,UpdateTaskInput } from './app.model';
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

  async deleteTask(data: DeleteTaskInput) { 
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
