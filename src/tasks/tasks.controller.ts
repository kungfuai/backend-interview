import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  public index() {
    return 'List of all tasks';
  }

  @Get(':id')
  public show() {
    return 'Show one task';
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
