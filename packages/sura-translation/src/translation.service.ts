import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTranslationDto } from "./dto/create-translation.dto";
import { TranslationEntity } from "src/entity/translation.entity";
import _ from "lodash";

@Injectable()
export class TranslationService {
  constructor(
    @InjectRepository(TranslationEntity)
    private translationRepo: Repository<TranslationEntity>
  ) {}

  // * Helper
  manipulateTranslateKeyHelperFun = async (dto: CreateTranslationDto) => {
    try {
      const objHaveNotManipulateKeyYet = {
        key: dto.value,
      };
      const objManipulatedKey = {};
      delete Object.assign(objManipulatedKey, objHaveNotManipulateKeyYet, {
        [dto.key]: objHaveNotManipulateKeyYet["key"],
      })["key"];

      const translateKeys = await this.translationRepo.find({
        where: { lang: dto.lang },
      });
      const getLastId = translateKeys[0].id;

      const getLastTranslateKey = translateKeys[0].translate_key;
      const newTranslateKey = {
        ...getLastTranslateKey,
        ...objManipulatedKey,
      };
      return {
        getLastId,
        newTranslateKey,
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  // * Services
  getOriginalDataServices = async () => {
    return await this.translationRepo.find();
  };

  // * Services
  getPrettierBaseI18nDataServices = async () => {
    const dataFromDb = await this.translationRepo.find();
    const getFindKeyTranslate = (lang: string) => {
      return dataFromDb.find((res) => res.lang === lang).translate_key;
    };
    const enTranslateData = getFindKeyTranslate("en");
    const khTranslateData = getFindKeyTranslate("kh");

    const i18nData = {
      en: {
        translation: enTranslateData,
      },
      kh: {
        translation: khTranslateData,
      },
    };
    return i18nData;
  };

  // * Services
  createTranslationKeyServices = async (dto: CreateTranslationDto) => {
    try {
      const data = await this.manipulateTranslateKeyHelperFun(dto);
      const saveData = {
        id: data.getLastId,
        translate_key: { ...data.newTranslateKey },
      };

      await this.translationRepo.save({
        lang: dto.lang,
        ...saveData,
      });
      return {
        message: "Translate created",
        data: saveData,
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  // * Services
  deleteKeyServices = async (param: string) => {
    try {
      const translateKeys = await this.translationRepo.find();
      const dataKey = translateKeys.map((data) => data.translate_key);
      const key = param["key"];

      const deleteEn = _.omit(dataKey[0], [key]);
      const deleteKh = _.omit(dataKey[1], [key]);

      await this.translationRepo.save({
        id: 1,
        lang: "kh",
        translate_key: deleteKh,
      });

      await this.translationRepo.save({
        id: 2,
        lang: "en",
        translate_key: deleteEn,
      });

      return this.translationRepo.find();
    } catch (error) {
      throw new Error(error);
    }
  };
}
