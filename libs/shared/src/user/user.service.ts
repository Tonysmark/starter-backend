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

    updateUserById(user: UserCredential, id: string) {
        return this.userRepository.updateUserById(user, id);
    }

    updateUserByEmail(user: UserCredential) {
        return this.userRepository.updateUserByEmail(user);
    }

    deleteUser(id: string) {
        return this.userRepository.deleteUser(id);
    }

    getUser(id: string) {
        return this.userRepository.getUser(id);
    }

    getUsers() {
        return this.userRepository.getUsers();
    }
}
