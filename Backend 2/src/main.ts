import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './error/http-exception.filter';
import { ErrorsInterceptor } from './error/errors.interceptor';

require ('../path.js');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ErrorsInterceptor());
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
