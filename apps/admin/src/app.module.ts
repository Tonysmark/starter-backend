import { DbModule } from '@libs/db';
import { UserModule } from '@libs/user';

import { Module } from '@nestjs/common';

@Module({
    providers: [],
    imports: [DbModule, UserModule],
})
export class AppModule {}
