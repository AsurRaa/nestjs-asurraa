import { DynamicModule, Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({})
export class TestModule {
  static register(typeOrmFeature: any): DynamicModule {
    return {
      module: TestModule,
      imports: [typeOrmFeature],
      controllers: [TestController],
      providers: [TestService],
      exports: [TestService],
    };
  }
}
