import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as mySqlSession from 'express-mysql-session';
import { localData } from './middlewares/localData';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.setBaseViewsDir(join(__dirname, "..", "views"))
  app.useStaticAssets(join(__dirname, "..", "public"))
  app.setViewEngine("ejs")

  const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'todo'
  }

  const MySqlStore = mySqlSession(session)

  const store = new MySqlStore(options)

  app.use(
    session({
      secret: "my-secret",
      resave: false,
      saveUninitialized: false,
      store: store
    })
  )

  app.use(localData)
  await app.listen(3000);
}
bootstrap();
