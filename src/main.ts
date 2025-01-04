import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './common/logging/logger.service';
import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(LoggerService);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors(); // Enable CORS if needed

  await app.listen(3000);
  logger.log('Application is running on port 3000');
}

bootstrap();
