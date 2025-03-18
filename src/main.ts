import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './common/config/config.type';

async function letsgo() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const documentConfig = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('docs', app, documentFactory, {
    swaggerOptions: {
      docExpansion: 'list',
      defaultModelsExpandDepth: 1,
      persistAuthorization: true,
    },
  });

  const configService = app.get(ConfigService);
  const config = configService.get<AppConfig>('app');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(config?.port ?? 3000, () => {
    const url = `http://${config?.host}:${config?.port}`;
    Logger.log(`Server started on ${url}/api/health`);
    Logger.log(`Swagger started on port ${url}/docs`);
  });
}
void letsgo();
