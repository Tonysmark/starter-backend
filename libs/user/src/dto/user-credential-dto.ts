import { ApiTags } from '@nestjs/swagger';

@ApiTags('基本用户信息')
export class UserCredential {
    username: string;

    icon: string;

    password: string;

    email: string;

    create_time: Date;

    update_time: Date;

    is_deleted: boolean;
}
