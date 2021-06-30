import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { TRANSLATE_LANG_ENUM } from '../enum/translate-lang.enum';

type translateKey = Record<string, string>;

@Entity('translate')
@Unique(['id', 'lang'])
export class TranslationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: TRANSLATE_LANG_ENUM, nullable: true })
  lang: TRANSLATE_LANG_ENUM;

  @Column({ type: 'json' })
  translate_key: translateKey;
}
