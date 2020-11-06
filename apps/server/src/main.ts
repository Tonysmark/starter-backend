import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('基本设施服务接口文档')
        .setDescription('为前端提供基础接口服务')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-doc', app, document);
    // start port
    await app.listen(3001);
    // Loggers
    Logger.log('base server app running at http://localhost:3001', 'Bootstrap');
    Logger.log('api documentation at http://localhost:3001/api-doc', 'Swagger');
}
bootstrap();
