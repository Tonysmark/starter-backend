import { BaseInterceptor } from '@libs/shared/Interceptors/base.interceptor';

import { Module, Global } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserService, { provide: APP_INTERCEPTOR, useClass: BaseInterceptor }],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule {}
