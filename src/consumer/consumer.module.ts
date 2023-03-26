import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/service/service';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [ServiceModule],
  providers: [ConsumerService],
  exports: [ConsumerService],
})
export class ConsumerModule {}
