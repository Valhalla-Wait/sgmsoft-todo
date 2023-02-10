import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './Database/prisma.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get("/api")
  getTask() {
    return this.appService.getTask();
  }
}
