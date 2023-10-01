import { AuthCallGuard } from '@infra-common/guards';
import { SendMailPayload } from '@infra-common/dtos';
import { Controller, UseGuards } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { MailService } from './mail.service';

@Controller()
@UseGuards(AuthCallGuard)
export class MailController {
  constructor(private mailService: MailService) {}

  @EventPattern('send_mail')
  public sendMail(
    @Payload() payload: SendMailPayload,
    @Ctx() context: RmqContext,
  ) {
    this.mailService.ack(context);
    this.mailService.sendMail(payload);
  }
}
