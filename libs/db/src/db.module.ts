import { Module, Global } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { DbService } from './db.service';

import Role from './entitys/role/role.entity';
import { UserLoginLog } from './entitys/user/user-logger.entity';
import { User } from './entitys/user/user.entity';
const defaultOption: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'starter',
    logging: false, // TODO 后期这里可以做成自定义的 logger
};
@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...defaultOption,
            entities: [User, Role, UserLoginLog],
            synchronize: true,
        }),
    ],
    providers: [DbService],
    exports: [DbService],
})
export class DbModule {}