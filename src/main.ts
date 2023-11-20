import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //* Elimina las propiedades que no estén en el DTO
      forbidNonWhitelisted: true  //* No deja pasar las propiedades que no estén en el DTO 
    })
  );
  await app.listen(3000);
}
bootstrap();
