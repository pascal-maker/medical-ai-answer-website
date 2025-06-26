import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExamService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.exam.findMany({ include: { questions: true } });
  }

  async findById(id: string) {
    return this.prisma.exam.findUnique({ where: { id }, include: { questions: true } });
  }

  async create(data: { title: string; questionIds: string[] }) {
    return this.prisma.exam.create({
      data: {
        title: data.title,
        questions: {
          connect: data.questionIds.map((id) => ({ id })),
        },
      },
      include: { questions: true },
    });
  }

  async update(id: string, data: { title?: string; questionIds?: string[] }) {
    return this.prisma.exam.update({
      where: { id },
      data: {
        ...(data.title ? { title: data.title } : {}),
        ...(data.questionIds
          ? {
              questions: {
                set: data.questionIds.map((id) => ({ id })),
              },
            }
          : {}),
      },
      include: { questions: true },
    });
  }

  async delete(id: string) {
    return this.prisma.exam.delete({ where: { id } });
  }
} 