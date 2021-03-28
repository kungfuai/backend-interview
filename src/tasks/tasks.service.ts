import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from 'src/dto/task.dto';
import { Task, TaskStatus } from 'src/entity/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  public async show(id: number) {
    const task: Task = await this.taskRepository.findOne(id);

    if (!task) throw new NotFoundException('The task was not found');
    const taskDTO = this.entityToDTO(task);

    return taskDTO;
  }

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

  public async update(id: number, updteTaskRequest: UpdateTaskDTO) {
    const task: Task = await this.show(id);

    if (updteTaskRequest.title) task.title = updteTaskRequest.title;
    if (updteTaskRequest.description)
      task.description = updteTaskRequest.description;
    if (updteTaskRequest.status) task.status = updteTaskRequest.status;

    await this.taskRepository.save(task);
    const taskDTO = this.entityToDTO(task);

    return taskDTO;
  }

  public async delete(id: number) {
    const task: Task = await this.show(id);

    await this.taskRepository.remove(task);
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
