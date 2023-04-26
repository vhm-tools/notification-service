import { AuthCallGuard } from '@infra-common';
import { Controller, UseGuards } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

@Controller()
@UseGuards(AuthCallGuard)
export class MailController {
  @EventPattern('send_mail')
  public sendMail(@Payload() payload: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);
    return payload;
  }
}
