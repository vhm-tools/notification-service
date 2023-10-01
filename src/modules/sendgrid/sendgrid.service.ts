import { Inject, Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';
import env from '@environments';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class SendGridService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {
    SendGrid.setApiKey(env.SENDGRID_API_KEY);
  }

  async send(mail: SendGrid.MailDataRequired) {
    const transport = await SendGrid.send(mail);
    // avoid this on production. use log instead :)
    this.logger.info(`E-Mail sent to ${mail.to}`);
    return transport;
  }
}
