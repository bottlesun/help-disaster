import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {UserRepository} from "./user.repository";
import {AuthCredentialsDto} from "./dto/auth.dto";
import * as bcrypt from 'bcryptjs';
import {User} from "./user.entity";
import {UserStatus} from "./auth-statues.enum";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    // @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {
  }

  async logIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken : string }> {
    const {username, password} = authCredentialsDto;
    const user = await this.userRepository.findOneBy({username: username});

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 ( secret, payload )
      const payload = {username: user.username, status: user.status};
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('LogIn failed')
    }
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    // console.log(authCredentialsDto,'authCredentialsDto')
    return this.userRepository.createUser(authCredentialsDto)
  }

  async getUserById(id: number): Promise<User> {
    const found = await this.userRepository.findOneBy({id: id});

    if (!found) throw new NotFoundException(`Can't find Board with id ${id}`);

    return found;
  }

  async getSignList(): Promise<User[]> {
    return this.userRepository.find()
  }

  async updateUserStatus(id: number, status: UserStatus): Promise<User> {
    const user = await this.getUserById(id);
    user.status = status;

    await this.userRepository.save(user);

    return user;
  }

}
