import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
  new = 'new',
  in_progress = 'in progress',
  completed = 'completed',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true, length: 100 })
  title: string;
  @Column({ nullable: true, length: 1024 })
  description: string;
  @Column({ nullable: false, default: TaskStatus.new })
  status: TaskStatus;
}
