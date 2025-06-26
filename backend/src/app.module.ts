import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { ExamModule } from './exam/exam.module';
import { AttemptModule } from './attempt/attempt.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    QuestionModule,
    ExamModule,
    AttemptModule,
  ],
  controllers: [AppController],
})
export class AppModule {} 