import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      message: 'Medical AI Backend API',
      version: '1.0.0',
      status: 'running',
      endpoints: {
        auth: '/auth',
        questions: '/questions',
        exams: '/exams',
        attempts: '/attempts',
        users: '/user',
      },
    };
  }

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
} 