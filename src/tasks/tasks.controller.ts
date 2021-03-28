import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from 'src/dto/task.dto';
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
  public async update(
    @Param('id') id: number,
    @Body() updteTaskRequest: UpdateTaskDTO,
  ) {
    const response = await this.taskService.update(id, updteTaskRequest);

    return response;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('id') id: number) {
    await this.taskService.delete(id);
  }
}
