import PermissionDto from './permission-dto';

export default class RoleDto {
    // 创建一个角色
    name: string;

    description: string;

    permission: PermissionDto[];
}
