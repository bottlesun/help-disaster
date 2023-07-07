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