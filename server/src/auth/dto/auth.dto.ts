import {IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";


export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]+$/, {message: '영문과 숫자만 가능합니다.'})
  username : string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]+$/, {message: '영문과 숫자만 가능합니다.'})
  password: string;
}


export class AuthSignUpDto extends AuthCredentialsDto {
  @IsString()
  @MinLength(3 , {message: '닉네임은 3글자 이상이어야 합니다.'})
  @MaxLength(20 , {message: '닉네임은 20글자 이하이어야 합니다.'})
  @Matches(/^[a-zA-Z가-힣]+$/, {message: '영문과 한글만 가능합니다.'})
  nickname : string;

}