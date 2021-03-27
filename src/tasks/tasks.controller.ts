import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  public index() {
    return 'List of all tasks';
  }

  @Get(':id')
  public show() {
    return 'Show one task';
  }

  @Post()
  public create() {
    return 'Create a task';
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
