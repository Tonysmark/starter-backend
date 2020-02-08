import { Injectable } from '@nestjs/common';
import RoleDto from './dto/role-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(RoleRepository) private roleRepository: RoleRepository) {}
    createRole(roleDto: RoleDto) {}

    getRoles() {}

    deleteRoleById(id: string) {}

    updateRoleById(id: string, roleDto: RoleDto) {}

    getRoleById(id: string) {}
}
