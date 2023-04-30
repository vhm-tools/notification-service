import { Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';
import env from '@environments';

@Injectable()
export class SendGridService {
  constructor() {
    SendGrid.setApiKey(env.SENDGRID_API_KEY);
  }

  async send(mail: SendGrid.MailDataRequired) {
    const transport = await SendGrid.send(mail);
    // avoid this on production. use log instead :)
    // console.log(`E-Mail sent to ${mail.to}`);
    return transport;
  }
}
