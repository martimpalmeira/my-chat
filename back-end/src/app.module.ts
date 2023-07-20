import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { AuthModule } from './auth/auth.module';
import { TemporaryCodeService } from './temporary-code/temporary-code.service';
import { TemporaryCodeController } from './temporary-code/temporary-code.controller';
import { EmailService } from './email/email.service';
import { EmailController } from './email/email.controller';
import { EmailModule } from './email/email.module';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017', {
      dbName: 'mychat',
    }),
    ContactsModule,
    UsersModule,
    ChatsModule,
    AuthModule,
    EmailModule,
    FileModule,
  ],
  controllers: [TemporaryCodeController, EmailController],
  providers: [TemporaryCodeService, EmailService, FileService],
})
export class AppModule {}
