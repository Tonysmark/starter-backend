import { Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { compare } from 'libs/util/crypt';

import { UserService } from '../user/user.service';
import { UserBaseDto } from '../user/dto/user-dto';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    async login(user: UserBaseDto) {
        const userEntity = await this.userService.findUser(user);
        const validPassword = await compare(user.password, userEntity.password);
        if (validPassword) {
            const payload = { sub: userEntity.id };
            return {
                access_token: this.jwtService.sign(payload),
            };
        } else {
            throw new ForbiddenException('用户名或密码错误');
        }
    }
}
