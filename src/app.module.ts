import { Module } from '@nestjs/common';
import { ExampleModule } from './example_module/example.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ExampleModule, TasksModule],
})
export class AppModule {}
