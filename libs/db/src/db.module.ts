import { Module, Global } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { DbService } from './db.service';

import { User } from './user/user.entity';
const defaultOption: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'starter',
    logging: true, // TODO 后期这里可以做成自定义的 logger
};
@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...defaultOption,
            entities: [User],
            synchronize: true,
        }),
    ],
    providers: [DbService],
    exports: [DbService],
})
export class DbModule {}
