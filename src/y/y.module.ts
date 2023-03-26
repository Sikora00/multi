import { Module } from '@nestjs/common';
import { ServiceModule, Services } from 'src/service/service';
import { YService } from './y.service';

@Module({
  imports: [ServiceModule],
  providers: [YService],
})
export class YModule {
  constructor(yService: YService, services: Services) {
    services.addService(yService);
  }
}
