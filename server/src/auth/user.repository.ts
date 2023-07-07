import {CustomRepository} from "../database/typeorm-ex.decorator";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {AuthCredentialsDto} from "./dto/auth.dto";
import {ConflictException, InternalServerErrorException} from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import {UserStatus} from "./auth-statues.enum";
@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {username, password} = authCredentialsDto;

    const salt = await bcrypt.genSalt(); // salt 생성
    // console.log('salt' , salt);

    const hashedPassword = await bcrypt.hash(password, salt); // 비밀번호 암호화
    // console.log(hashedPassword,'hashedPassword');

    const user = new User();
    user.username = username;
    user.password = hashedPassword;
    user.status = UserStatus.USER;

    try {
      await user.save();
    } catch (error) {
      // console.log(error.code,'error.code') // 23505 error.code
      if (error.code === '23505') {
        // ConflictException 은 409 에러를 의미한다.
        throw new ConflictException('이미 존재하는 유저입니다.');
      } else {
        // InternalServerErrorException 은 500 에러를 의미한다.
        throw new InternalServerErrorException();
      }
    }
  }

}
