import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

// import { RoleDecorator } from '@role-decorator';
// import { ROLE } from '@role-enum';
// import { RolesGuard } from '@roleguard/role.guard';
// import { Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { TranslationEntity } from './entities/translation.entity';
import { TranslationService } from './translation.service';

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  // @ApiOperation({
  //   summary:
  //     'DO NOT USE THIS, USE ONLY WHEN TO INIT TRANSLATION IF YOU USING THIS WILL OVERRIDE THE EXISTING DB ',
  // })
  // // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Post('init/:secret')
  // bootstrap(@Param('secret') secret: string) {
  //   console.log('secret key', secret);
  //   return this.translationService.getInitExecution(secret);
  // }

  @Get('/original-data')
  getAllData() {
    return this.translationService.getOriginalDataServices();
  }

  // @Get('all')
  // @ApiQuery({ example: 10, name: 'limit' })
  // @ApiQuery({ example: 1, name: 'page' })
  // @ApiQuery({ example: '', name: 'filter' })
  // findAll(
  //   @Query('limit') limit = 10,
  //   @Query('page') page = 1,
  //   @Query('filter') filter = '',
  // ): Observable<Pagination<TranslationEntity>> {
  //   return this.translationService.findAll({
  //     limit: Number(limit),
  //     page: Number(page),
  //     route: BASE_URI + 'translate/all',
  //     filter,
  //   });
  // }

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
