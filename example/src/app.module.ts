import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule, TestEntity } from '@asurraa/nestjs-library-starter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-test-library',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TestModule.register(TypeOrmModule.forFeature([TestEntity])),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
