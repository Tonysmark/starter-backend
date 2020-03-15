import { Repository, EntityRepository } from 'typeorm';
import Role from '@libs/db/entities/role/role.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
