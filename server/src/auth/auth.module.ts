import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmExModule} from "../database/typeorm-ex.module";
import {UserRepository} from "./user.repository";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./jwt.strategy";
import * as config from 'config'
import * as process from "process";

const jwtConfig = config.get('jwt');

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET ||  jwtConfig.secret,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN ||  jwtConfig.expiresIn
      }
    }),
    TypeOrmExModule.forCustomRepository([UserRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports: [JwtStrategy, PassportModule] // JwtStrategy 를 다른 모듈에서 사용할 수 있게 export 한다.
})
export class AuthModule {}
