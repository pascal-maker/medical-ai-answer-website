import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Difficulty } from '@prisma/client';

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.question.findMany();
  }

  async findById(id: string) {
    return this.prisma.question.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.question.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.question.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.question.delete({ where: { id } });
  }

  async getAdaptivePracticeSet(topic?: string, difficulty?: Difficulty, limit = 10) {
    // For MVP: random questions, can be weighted by topic/difficulty later
    return this.prisma.question.findMany({
      where: {
        ...(topic ? { tags: { has: topic } } : {}),
        ...(difficulty ? { difficulty } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }
} 