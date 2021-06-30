import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TranslationService } from '@sura-nest/translation';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly translationService: TranslationService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('init-translation/:secret')
  initTranslation(@Param('secret') secret: string) {
    return this.translationService.getInitExecution(secret, 'asurraa-unicorn');
  }
}
