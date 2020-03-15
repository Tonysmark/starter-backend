import { Module, Global } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { DbService } from './db.service';

import Role from './entities/role/role.entity';
import { UserLoginLog } from './entities/user/user-logger.entity';
import { User } from './entities/user/user.entity';
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
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
        }),
    ],
    providers: [DbService],
    exports: [DbService],
})
export class DbModule {}
