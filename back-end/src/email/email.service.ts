import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { FileService } from 'src/file/file.service';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

@Injectable()
export class EmailService {
  private readonly transporter: nodemailer.Transporter;

  constructor(private fileService: FileService) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Your email provider SMTP host
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail(
    to: string,
    subject: string,
    templateData: object,
  ): Promise<void> {
    const template = fs.readFileSync(
      'src/assets/templates/email/accessCode.html',
      'utf8',
    );
    const compiledTemplate = handlebars.compile(template);
    const html = compiledTemplate(templateData);
    // const path = 'src/assets/email-templates/access-code-email.html';
    // const content = await this.fileService.readFileContent(path);
    // console.log(content);
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'martim.desenvolvedor@gmail.com',
      to,
      subject,
      html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
