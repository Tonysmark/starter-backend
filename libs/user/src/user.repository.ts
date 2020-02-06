import { User } from '@libs/db/user/user.entity';

import { ConflictException, Logger, NotFoundException } from '@nestjs/common';

import Crypt from 'libs/util/crypt';

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
    // 用户并不是真的被删除了，只不过再 is_deleted 字段设置为 true

    async createUser(user: UserBaseDto): Promise<User> {
        const userEntity = new User(user.username, user.email, await Crypt.encrypt(user.password));
        try {
            await userEntity.save();
            return userEntity;
        } catch (error) {
            throw new ConflictException('用户已经存在');
        }
    }

    async updateUserById(user: UserCredential, id: string) {
        const userEntity = await this.getUser(id);
        if (user['password']) {
            user.password = await Crypt.encrypt(user.password);
        }
        user.update_time = new Date();
        this.update(userEntity, user);
    }

    async updateUserByEmail(user: UserCredential) {
        const query = this.createQueryBuilder('user');
        const { email } = user; // 因为 email 唯一所以只用 getOne 就行
        const userEntity = await query.where('user.email=:email', { email }).getOne();
        if (userEntity) {
            if (user['password']) {
                user.password = await Crypt.encrypt(user.password);
            }
            user.update_time = new Date();
            this.update(userEntity, user);
        } else {
            throw new NotFoundException(`使用 email: ${email} 的用户不存在`);
        }
    }

    async deleteUser(id: string): Promise<void> {
        // 本质也是调用 updateUser 只不过把 user 中的 is_deleted = true
        const userEntity = await this.getUser(id);
        this.update(userEntity, { is_deleted: true });
        return;
    }

    async getUser(id: string): Promise<User> {
        const user = await this.findOne(id);
        if (user) {
            return user;
        } else {
            throw new NotFoundException(`当前用户 id: ${id} 未找到`);
        }
    }

    async getUsers() {
        const number = await this.count();
        Logger.log(number, 'UserRepository');
        return this.find();
    }
}
