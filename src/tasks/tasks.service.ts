import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO, TaskDTO } from 'src/dto/task.dto';
import { Task, TaskStatus } from 'src/entity/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  public async index() {
    const tasks: Task[] = await this.taskRepository.find();
    const tasksDTO: TaskDTO[] = tasks.map(task => this.entityToDTO(task));

    return tasksDTO;
  }
  public async create(createTaskRequest: CreateTaskDTO) {
    const task: Task = new Task();
    task.title = createTaskRequest.title;
    task.description = createTaskRequest.description;
    task.status = TaskStatus.new;

    await this.taskRepository.save(task);
    const taskDTO = this.entityToDTO(task);

    return taskDTO;
  }

  private entityToDTO(task: Task): TaskDTO {
    const taskDTO = new TaskDTO();
    taskDTO.id = task.id;
    taskDTO.title = task.title;
    taskDTO.description = task.description;
    taskDTO.status = task.status;

    return taskDTO;
  }
}
