import { User } from '@libs/db/entitys/user/user.entity';

import { ConflictException, Logger, NotFoundException } from '@nestjs/common';

import { encrypt } from 'libs/util/crypt';

import { EntityRepository, Repository } from 'typeorm';

import { UserCredential } from './dto/user-credential-dto';
import { UserBaseDto } from './dto/user-dto';

/**
 *
 *
 * @export
 * @class UserRepository
 * @extends {Repository<User>}
 * @note id username email 都是唯一的
 * @note 根据 SOLID 原则重构这部分代码，并且把修改密码分离出来
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(user: UserBaseDto): Promise<User> {
        const userEntity = new User();
        userEntity.username = user.username;
        userEntity.email = user.email;
        userEntity.password = await encrypt(user.password);
        userEntity.icon = user['icon'];
        try {
            await userEntity.save();
            return userEntity;
        } catch (error) {
            throw new ConflictException('用户已经存在');
        }
    }

    async updateUserById(user: UserCredential, id: string) {
        const userEntity = await this.getUserById(id);
        if (user['password']) {
            user.password = await encrypt(user.password);
        }
        user.update_time = new Date();
        this.update(userEntity, user);
    }

    async deleteUser(id: string): Promise<void> {
        // 本质也是调用 updateUser 只不过把 user 中的 is_deleted = true
        const userEntity = await this.getUserById(id);
        this.update(userEntity, { is_deleted: true });
        return;
    }

    async getUserById(id: string): Promise<User> {
        // 管理员在管理面板看到的用户数据肯定带有id
        const user = await this.findOne(id);
        if (user) {
            return user;
        } else {
            throw new NotFoundException(`当前用户 ${id} 未找到`);
        }
    }

    async getUsers() {
        const number = await this.count();
        Logger.log(number, 'UserRepository');
        return this.find();
    }

    async fineUser(user: UserBaseDto) {
        // 提供给非 admin controller 下
        const query = this.createQueryBuilder('user');
        const { email, username } = user; // 因为 email 唯一所以只用 getOne 就行
        const userEntity = await query
            .where('user.email=:email', { email })
            .orWhere('user.username=:username', { username })
            .getOne();
        if (userEntity) {
            return userEntity;
        } else {
            throw new NotFoundException('用户不存在');
        }
    }
}
