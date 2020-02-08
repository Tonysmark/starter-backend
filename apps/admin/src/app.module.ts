import { DbModule } from '@libs/db';
import { SharedModule } from '@libs/shared';

import { Module } from '@nestjs/common';

import { RoleModule } from './role/role.module';

/**
 *  只有管理员可以操作用户权限
 */
@Module({
    providers: [],
    imports: [DbModule, SharedModule, RoleModule],
})
export class AppModule {}
