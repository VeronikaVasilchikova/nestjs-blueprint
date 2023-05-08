import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../libs/data-services/mongo/mongo-data-services.module';

@Module({
  imports: [MongoDataServicesModule],
  exports: [MongoDataServicesModule],
})
export class DataServicesModule {}
