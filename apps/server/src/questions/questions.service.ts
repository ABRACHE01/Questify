import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base/base.service'; 
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';


@Injectable()
export class QuestionsService extends BaseService<Question> {
  constructor(
    @InjectRepository(Question)
    private questionyRepository: Repository<Question>,
  ) {
    super(questionyRepository);
  }
  
}
