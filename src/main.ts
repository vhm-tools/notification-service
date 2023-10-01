import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { MainModule } from './main.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RabbitMQConfig } from '@infra-common/configs';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MainModule,
    RabbitMQConfig,
  );

  await app.listen();
  Logger.log(`🚀  Notification service is listening`, 'Boostrap');
}
bootstrap();
