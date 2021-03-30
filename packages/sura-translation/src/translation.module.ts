import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TranslationService } from "./translation.service";
import { TranslationEntity } from "./entity/translation.entity";
import { TranslationController } from "./translation.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TranslationEntity])],
  controllers: [TranslationController],
  providers: [TranslationService],
  exports: [TranslationModule],
})
export class TranslationModule {}
