import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { TranslationService } from './translation.service';

@ApiTags('translation')
@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get('/original-data')
  getAllData() {
    return this.translationService.getOriginalDataServices();
  }

  @Get('/messages/:lang')
  getSpecificTranslateLanguage(@Param() param) {
    return this.translationService.getSpecificTranslateLanguageService(
      param.lang,
    );
  }

  @Get('/baseI18nDataModelData')
  getPrettierBaseI18nData() {
    return this.translationService.getPrettierBaseI18nDataServices();
  }

  @Post('/create')
  async createTranslation(@Body() dto: CreateTranslationDto) {
    return await this.translationService.createTranslationKeyServices(dto);
  }

  @Put('/update')
  async editTranslation(@Body() dto: CreateTranslationDto) {
    return await this.translationService.createTranslationKeyServices(dto);
  }

  @Delete('/delete/:key')
  async deleteTranslateKey(@Param() key) {
    return this.translationService.deleteKeyServices(key);
  }
}
