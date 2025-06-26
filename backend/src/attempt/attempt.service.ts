import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AttemptService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.attempt.findMany();
  }

  async findById(id: string) {
    return this.prisma.attempt.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.attempt.create({ data });
  }

  async submitAttempt(userId: string, examId: string, answers: any) {
    // For MVP: score = number of correct answers
    const exam = await this.prisma.exam.findUnique({
      where: { id: examId },
      include: { questions: true },
    });
    let score = 0;
    if (exam) {
      for (const q of exam.questions) {
        if (answers[q.id] === q.answer) score++;
      }
    }
    return this.prisma.attempt.create({
      data: {
        userId,
        examId,
        answers,
        score,
      },
    });
  }
} 