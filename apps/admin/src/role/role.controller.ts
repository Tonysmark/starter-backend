import { Controller, Get, Put, Delete, Post, Body, Param } from '@nestjs/common';

import { RoleService } from './role.service';
import RoleDto from './dto/role-dto';

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

    @Get(':id')
    getRoleById(@Param() id: string) {
        return this.roleService.getRoleById(id);
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
