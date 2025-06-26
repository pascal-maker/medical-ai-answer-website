import { Body, Controller, Get, Param, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AttemptService } from './attempt.service';
import { JwtAuthGuard } from '../auth/jwtAuth.guard';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
    role: string;
  };
}

@Controller('attempts')
export class AttemptController {
  constructor(private readonly attemptService: AttemptService) {}

  @Get()
  async findAll() {
    return this.attemptService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.attemptService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('submit')
  async submit(@Req() req: AuthenticatedRequest, @Body() body: { examId: string; answers: any }) {
    return this.attemptService.submitAttempt(req.user.userId, body.examId, body.answers);
  }
} 