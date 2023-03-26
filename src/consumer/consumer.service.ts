import { Injectable } from '@nestjs/common';
import { Services } from 'src/service/service';

@Injectable()
export class ConsumerService {
  constructor(private readonly services: Services) {}

  doSomething() {
    this.services.getServices().forEach((service) => service.logSomething());
  }
}
