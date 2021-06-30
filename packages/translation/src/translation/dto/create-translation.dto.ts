// import { ApiProperty } from '@nestjs/swagger';
import { TRANSLATE_LANG_ENUM } from '../enum/translate-lang.enum';

export class CreateTranslationDto {
  // @ApiProperty({ example: 'kh' })
  lang: TRANSLATE_LANG_ENUM;
  // @ApiProperty({ example: 'success' })
  key: string;
  // @ApiProperty({ example: 'ជោគជ័យ' })
  value: string;
}
