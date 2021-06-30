<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS npm Package Starter</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

1. Import TranslationModule to AppModule
2. Register TranslationModule with TypeormModule

```typescript
import { TranslationEntity, TranslationModule } from '@sura-nest/translation';
@Module({
  imports: [
    TranslationModule.register(TypeOrmModule.forFeature([TranslationEntity])),
  ]
})
```

3. Import Translation to AppController
4. Setup init-translation route in AppController

```typescript
import { TranslationService } from '@sura-nest/translation';

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

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Kimseng Duong**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.