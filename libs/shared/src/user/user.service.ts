import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';

import { UserCredential } from './dto/user-credential-dto';
import { UserBaseDto } from './dto/user-dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) {}

    async createUser(user: UserBaseDto) {
        return await this.userRepository.createUser(user);
    }

    async updateUserById(user: UserCredential, id: string) {
        return this.userRepository.updateUserById(user, id);
    }

    async deleteUser(id: string) {
        return this.userRepository.deleteUser(id);
    }

    async getUserById(id: string) {
        return this.userRepository.getUserById(id);
    }
    async findUser(user: UserBaseDto) {
        return this.userRepository.fineUser(user);
    }

    async getUsers() {
        return this.userRepository.getUsers();
    }
}
