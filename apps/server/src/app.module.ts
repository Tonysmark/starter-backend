import { DbModule } from '@libs/db';
import { UserModule } from '@libs/user';

import { Module } from '@nestjs/common';

@Module({
    imports: [DbModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
