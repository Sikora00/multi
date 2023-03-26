import { Module } from '@nestjs/common';
import { ServiceModule, Services } from 'src/service/service';
import { XService } from './x.service';

@Module({
  imports: [ServiceModule],
  providers: [XService],
})
export class XModule {
  constructor(xService: XService, services: Services) {
    services.addService(xService);
  }
}
