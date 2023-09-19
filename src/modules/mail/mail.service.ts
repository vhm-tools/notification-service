import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import Handlebars from 'handlebars';
import { SendMailPayload } from '@infra-common';
import { SendGridService } from '../sendgrid/sendgrid.service';
import env from '@environments';

@Injectable()
export class MailService {
  constructor(private sendGridService: SendGridService) {}

  sendMail(payload: SendMailPayload): void {
    const { data } = payload;
    const template = Handlebars.compile(data.html);

    const mailData = {
      ...data,
      html: template({
        fullName: 'Minh Moment',
        isCandidate: true,
        verifyUrl:
          'https://dev.novu-web.heydevs.io/templates/edit/64ed74cf8df76f391ec37d75',
      }),
      from: env.SENDGRID_EMAIL,
    };
    this.sendGridService.send(mailData);
  }

  ack(ctx: RmqContext): void {
    const channel = ctx.getChannelRef();
    const message = ctx.getMessage();
    channel.ack(message);
  }
}
