import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { ExamService } from './exam.service';
import { JwtAuthGuard } from '../auth/jwtAuth.guard';

@Controller('exams')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  async findAll() {
    return this.examService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.examService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: { title: string; questionIds: string[] }) {
    return this.examService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { title?: string; questionIds?: string[] }) {
    return this.examService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.examService.delete(id);
  }

  @Get(':id/simulate')
  async simulate(@Param('id') id: string) {
    // For MVP, just return the exam with questions
    return this.examService.findById(id);
  }
} 