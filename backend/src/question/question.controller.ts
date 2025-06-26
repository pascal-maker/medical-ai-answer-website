import { Body, Controller, Get, Param, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { JwtAuthGuard } from '../auth/jwtAuth.guard';
import { Difficulty } from '@prisma/client';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async findAll() {
    return this.questionService.findAll();
  }

  @Get('adaptive')
  async getAdaptivePracticeSet(
    @Query('topic') topic?: string,
    @Query('difficulty') difficulty?: string,
    @Query('limit') limit?: string,
  ) {
    const difficultyEnum = difficulty as Difficulty | undefined;
    return this.questionService.getAdaptivePracticeSet(topic, difficultyEnum, Number(limit) || 10);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.questionService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: any) {
    return this.questionService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.questionService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
} 