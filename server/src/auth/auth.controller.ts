import {Body, Controller, Get, Param, Patch, Post, Req, UseGuards, ValidationPipe} from '@nestjs/common';
import {AuthCredentialsDto, AuthSignUpDto} from "./dto/auth.dto";
import {AuthService} from "./auth.service";
import {User} from "../entity/user.entity";
import {UserStatus} from "./auth-statues.enum";
import {AuthStatusPipe} from "./pipe/auth-status.pipe";
import {AuthGuard} from "@nestjs/passport";
import {JwtStrategy} from "./jwt.strategy";

@Controller('auth')
export class AuthController {
  constructor(
    // @InjectRepository(UserRepository)
    private authService: AuthService
  ) {
  }

  @Post('/signup')
  //ValidationPipe 는 dto 에서 설정한 유효성 검사를 실행한다.
  signUp(@Body(ValidationPipe) authSignUpDto: AuthSignUpDto): Promise<void> {
    return this.authService.signUp(authSignUpDto);
  }

  @Get('/user')
  // @UseGuards(AuthGuard())
  getSignList(): Promise<User[]> {
    return this.authService.getSignList();
  }

  @Get('/user/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.authService.getUserById(id);
  }

  // 로그인된 사용자의 정보를 추출하여 사용
  @Get('/profile')
  @UseGuards(AuthGuard())
  getProfile(@Req() request): string {
    // JwtAuthGuard를 사용하여 요청 헤더에 포함된 토큰을 검증하고, 로그인된 사용자 정보를 추출합니다.
    const user = request.user;
    console.log(user)
    // 추출한 사용자 정보를 이용하여 로직을 수행하거나 반환할 수 있습니다.
    return request.user
  }

  @Patch('/status/:id')
  updateUserStatus(
    @Param('id') id: number,
    @Body('status', AuthStatusPipe) status: UserStatus
  ) : Promise<User> {
    return this.authService.updateUserStatus(id, status);
  }

  @Post('/login')
  logIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto){
    return this.authService.logIn(authCredentialsDto)
  }

  // @Post('/test')
  // @UseGuards(AuthGuard()) // 토큰 검사
  // authTest(@Req() req){
  //   console.log(req.user)
  // }
}