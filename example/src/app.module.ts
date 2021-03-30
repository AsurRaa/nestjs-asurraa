import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationModule } from '@asurraa/sura-translation';

@Module({
  // imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
