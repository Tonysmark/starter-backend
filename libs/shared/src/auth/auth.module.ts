import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { secret } from './jwt/constants';
import { JwtStrategyService } from './jwt/jwt-strategy.service';
@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }), // 当使用 authGuard('jwt') 时，调用 passport
        JwtModule.register({
            secret,
            signOptions: { expiresIn: '7d' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}
