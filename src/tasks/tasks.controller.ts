import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDTO, TaskDTO } from 'src/dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  public async index() {
    const response = await this.taskService.index();

    return response;
  }

  @Get(':id')
  public async show(@Param('id') id: number) {
    const response = await this.taskService.show(id);

    return response;
  }

  @Post()
  public async create(@Body() createTaskRequest: CreateTaskDTO) {
    const response = await this.taskService.create(createTaskRequest);

    return response;
  }

  @Patch(':id')
  public update() {
    return 'update task';
  }

  @Delete(':id')
  public destroy() {
    return 'remove a task';
  }
}
