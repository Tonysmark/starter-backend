import {
    Controller,
    Post,
    Body,
    Get,
    Delete,
    Put,
    Param,
    UseInterceptors,
    ClassSerializerInterceptor,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { UserService } from './user.service';

import { UserCredential } from './dto/user-credential-dto';
import { UserBaseDto } from './dto/user-dto';

@ApiTags('用户')
@Controller('user')
@UsePipes(ValidationPipe)
@UseInterceptors(ClassSerializerInterceptor) // 拦截器处理返回数据
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({ summary: '添加用户' })
    @Post()
    createUser(@Body() user: UserBaseDto) {
        return this.userService.createUser(user);
    }

    @ApiOperation({ summary: '已知id更新用户' })
    @Put(':id')
    updateUserById(@Body() user: UserCredential, @Param('id') id: string) {
        return this.userService.updateUserById(user, id);
    }

    @ApiOperation({ summary: '未知id更新用户' })
    @Post('update-by-email')
    updateUserByEmail(@Body() user: UserCredential) {
        return this.userService.updateUserByEmail(user);
    }

    @ApiOperation({ summary: '删除用户' })
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }

    @ApiOperation({ summary: '获取某一个用户' })
    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @ApiOperation({ summary: '获取所有用户' })
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
}
