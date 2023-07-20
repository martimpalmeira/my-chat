import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { Public } from 'src/auth/skipAuth';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Public()
  @Post()
  async sendEmail(@Body() body: { to: string; subject: string }) {
    const { to, subject } = body;
    const templateData = { name: 'John Doe' };

    await this.emailService.sendEmail(to, subject, templateData);

    return { success: true, message: 'Email sent successfully.' };
  }
}
