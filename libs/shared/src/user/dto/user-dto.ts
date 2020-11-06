import { ApiProperty, ApiTags } from '@nestjs/swagger';

import { IsNotEmpty, IsEmail } from 'class-validator';
@ApiTags('登录注册用')
export class UserBaseDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsEmail()
    email: string;
}
