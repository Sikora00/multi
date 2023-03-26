import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerModule } from './consumer/consumer.module';
import { XModule } from './x/x.module';
import { YModule } from './y/y.module';

@Module({
  imports: [ConsumerModule, XModule, YModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
