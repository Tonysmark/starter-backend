import { ApiTags, ApiProperty } from '@nestjs/swagger';

@ApiTags('完整的用户信息')
export class UserCredential {
    @ApiProperty() username: string;

    @ApiProperty() icon: string;

    @ApiProperty() password: string;

    @ApiProperty() email: string;

    @ApiProperty() create_time: Date;

    @ApiProperty() update_time: Date;

    @ApiProperty() is_deleted: boolean;
}
