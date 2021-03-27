import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
//import * as ormconfig from '../ormconfig';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
