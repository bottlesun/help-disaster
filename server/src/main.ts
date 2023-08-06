import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');
  const host = config.get('db.host');
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  // app.enableCors({
  //   origin: 'http://allowed-domain.com',
  // });

  const port = serverConfig.port;
  await app.listen(port);
  Logger.log(`Application listening on port ${port}`);
}
bootstrap();
