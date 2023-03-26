import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConsumerService } from './consumer/consumer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly consumer: ConsumerService,
  ) {}

  @Get()
  getHello(): string {
    this.consumer.doSomething();
    return this.appService.getHello();
  }
}
