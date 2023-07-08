import {Body, Controller, Get, Param, Patch, Post, Req, UseGuards, ValidationPipe} from '@nestjs/common';
import {AuthCredentialsDto} from "./dto/auth.dto";
import {AuthService} from "./auth.service";
import {User} from "./user.entity";
import {UserStatus} from "./auth-statues.enum";
import {AuthStatusPipe} from "./pipe/auth-status.pipe";
import {AuthGuard} from "@nestjs/passport";

@Controller('auth')
export class AuthController {
  constructor(
    // @InjectRepository(UserRepository)
    private authService: AuthService
  ) {
  }

  @Post('/signup')
  //ValidationPipe 는 dto 에서 설정한 유효성 검사를 실행한다.
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
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

  @Patch('/user/status/:id')
  updateUserStatus(
    @Param('id') id: number,
    @Body('status', AuthStatusPipe) status: UserStatus
  ) {
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