import { DbModule } from '@libs/db';
import { SharedModule } from '@libs/shared';

import { Module } from '@nestjs/common';
@Module({
    imports: [DbModule, SharedModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
