import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type translateKey = Record<string, string>;

@Entity()
export class TranslationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lang: string;

  @Column({ type: "json" })
  translate_key: translateKey;
}
