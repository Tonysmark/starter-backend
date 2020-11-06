import { ApiProperty } from '@nestjs/swagger';

import PermissionDto from './permission-dto';

export default class RoleDto {
    // 创建一个角色
    @ApiProperty() name: string;

    @ApiProperty() description: string;

    @ApiProperty() permission: PermissionDto[];
}
