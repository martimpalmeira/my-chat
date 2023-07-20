import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { FileService } from 'src/file/file.service';

@Module({
  controllers: [EmailController],
  providers: [EmailService, FileService],
  exports: [EmailService],
})
export class EmailModule {}
