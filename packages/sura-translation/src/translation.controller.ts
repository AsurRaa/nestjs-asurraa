import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateTranslationDto } from "./dto/create-translation.dto";
import { TranslationService } from "./translation.service";

@Controller("translation")
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get("/all")
  getAllData() {
    return this.translationService.getOriginalDataServices();
  }

  @Get("/baseI18nDataModelData")
  getPrettierBaseI18nData() {
    return this.translationService.getPrettierBaseI18nDataServices();
  }

  @Post("/create")
  async createTranslation(@Body() dto: CreateTranslationDto) {
    return await this.translationService.createTranslationKeyServices(dto);
  }

  @Put("/update")
  async editTranslation(@Body() dto: CreateTranslationDto) {
    return await this.translationService.createTranslationKeyServices(dto);
  }

  @Delete("/delete/:key")
  async deleteTranslateKey(@Param() key) {
    return this.translationService.deleteKeyServices(key);
  }
}
