import { Controller, Get, Put, Delete, Post, Body, Param, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

import { RoleService } from './role.service';

import RoleDto from './dto/role-dto';
@ApiTags('角色管理')
@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Post()
    createRole(@Body() roleDto: RoleDto) {
        return this.roleService.createRole(roleDto);
    }

    @Get()
    getRoles() {
        return this.roleService.getRoles();
    }
    @ApiOperation({ summary: '查询某一角色' })
    @Get(':id')  // get 直接放id少数情况用
    getRoleById(@Param() params: string) {
        Logger.log(params, 'RoleController');
        return this.roleService.getRoleById(params);
    }

    @Put(':id')
    updateRoleById(@Param() id: string, @Body() roleDto: RoleDto) {
        return this.roleService.updateRoleById(id, roleDto);
    }

    @Delete(':id')
    DeleteRoleById(@Param() id: string) {
        return this.roleService.deleteRoleById(id);
    }
}
