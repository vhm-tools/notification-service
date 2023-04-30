import { Module } from '@nestjs/common';
import { SendGridService } from '../sendgrid/sendgrid.service';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  controllers: [MailController],
  providers: [MailService, SendGridService],
})
export class MailModule {}
