import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('管理员接口文档')
        .setDescription('为 admin 前端提供接口服务')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-doc', app, document);
    // start port
    await app.listen(8080);
    // Loggers
    Logger.log('admin app running at http://localhost:8080', 'Bootstrap');
    Logger.log('api documentation at http://localhost:8080/api-doc', 'Swagger');
}
bootstrap();
