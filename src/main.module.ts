import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '@common';
import { MailModule, SendGridModule } from '@modules';
import { WinstonModule } from 'nest-winston';
import { WinstonConfigService } from '@infra-common/configs';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
    }),
    MailModule,
    SendGridModule,
  ],
})
export class MainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
