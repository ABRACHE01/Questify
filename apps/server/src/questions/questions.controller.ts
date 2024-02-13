import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { FindOneOptions } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('questions')  
@Controller('api/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get('all')
  getAll() {
    return this.questionsService.findAll();
  }

  @Get()
  findUntrashed() {
    const options: FindOneOptions<Question> = { where: { isDeleted: false } };
    return this.questionsService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Question> = { where: { isDeleted: true } };
    return this.questionsService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Question> = { where: { id: id , isDeleted: false } };
    return this.questionsService.find(options);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionsService.update({ where: { id: id  } }, updateQuestionDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.questionsService.softDelete(id);
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.questionsService.forceDelete(id);
  }

}
