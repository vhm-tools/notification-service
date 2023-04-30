import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import { SendGridService } from '../sendgrid/sendgrid.service';
import env from '@environments';

@Injectable()
export class MailService {
  constructor(private sendGridService: SendGridService) {}

  sendMail(payload: any): void {
    const { data } = payload;
    const mail = {
      ...data,
      from: env.SENDGRID_EMAIL, // Fill it with your validated email on SendGrid account
    };
    this.sendGridService.send(mail);
  }

  ack(ctx: RmqContext): void {
    const channel = ctx.getChannelRef();
    const message = ctx.getMessage();
    channel.ack(message);
  }
}
