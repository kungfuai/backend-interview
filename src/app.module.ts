import { Module } from '@nestjs/common';
import { ExampleModule } from './example_module/example.module';

@Module({
  imports: [ExampleModule],
})
export class AppModule {}
