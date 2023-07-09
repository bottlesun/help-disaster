import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-jwt";
import {UserRepository} from "./user.repository";
import {ExtractJwt} from "passport-jwt";
import {User} from "../entity/user.entity";
import process from "process";
import * as config from 'config'

@Injectable() // 이걸 해줘야 의존성 주입이 가능하다.
export class JwtStrategy extends PassportStrategy(Strategy){
  // JwtStrategy 는 PassportStrategy 를 상속받는다.
  constructor(  private userRepository: UserRepository) {
    super({ // super 는 부모 클래스의 생성자를 호출한다.
      secretOrKey: process.env.JWT_SECRET  || config.get('jwt.secret'),
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken 은 헤더에 있는 토큰을 가져온다.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    });
  }

  async validate(payload) {
    const {username} = payload;
    const user : User = await this.userRepository.findOneBy({username: username});

    if(!user) throw new UnauthorizedException(); // 유저가 없으면 401 에러를 던진다.

    return user;
  }
}