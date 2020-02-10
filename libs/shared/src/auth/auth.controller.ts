import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { UserBaseDto } from '../user/dto/user-dto';

import { AuthService } from './auth.service';
@ApiTags('认证接口')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() credential: UserBaseDto) {
        return this.authService.login(credential);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async profile(@Req() req) {
        return req.user;
    }
}
