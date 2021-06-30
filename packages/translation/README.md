<p align="center">
  <img width="150" src="https://avatars.githubusercontent.com/u/62465909?s=400&u=b543f5c67f4bafb214e9064ac95de21e35daf2d9&v=4">
</p>
<h1 align="center"> SURA NEST </h1>
<p align="center">
  <b >NestJS modules use internally at AsurRaa.</b>
</p>

<p>
  <a href="https://www.npmjs.com/package/@asurraa/sura-nest-translation">
    <img src="https://img.shields.io/npm/v/@asurraa/sura-nest-translation.svg" alt="npm package." />
  </a>
</p>


### Installation
```bash
npm install @asurraa/sura-nest-translation
```
```bash
yarn add @asurraa/sura-nest-translation
```

1. Import TranslationModule to AppModule
2. Register TranslationModule with TypeormModule

```typescript
import { TranslationEntity, TranslationModule } from '@asurraa/sura-nest-translation';
@Module({
  imports: [
    TranslationModule.register(TypeOrmModule.forFeature([TranslationEntity])),
  ]
})
```

3. Import Translation to AppController
4. Setup init-translation route in AppController



```typescript
import { TranslationService } from '@asurraa/sura-nest-translation';

@Controller()
export class AppController {
  constructor(
    private readonly translationService: TranslationService,
  ) {}

  @Post('init-translation/:secret')
  initTranslation(@Param('secret') secret: string) {
    return this.translationService.getInitExecution(secret, 'asurraa');
  }
}
```
- `secret` is init param
- `'asurraa'` is default secret check with  `secret`

5. POST: [http://localhost:3000/init-translation/asurraa](http://localhost:3000/init-translation/asurraa)

## Usage
the usage of sura-nest-translation

#### Route
- `translation/create`
- `translation/update`
- `translation/delete/:key`
- `translation/messages/:lang`
- `translation/original-data`
- `translation/baseI18nDataModelData`