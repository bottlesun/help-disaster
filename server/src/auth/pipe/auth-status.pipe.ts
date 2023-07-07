import {ArgumentMetadata, PipeTransform} from "@nestjs/common";
import {UserStatus} from "../auth-statues.enum";

export class AuthStatusPipe implements PipeTransform{
  readonly StatusOptions = [UserStatus.USER, UserStatus.MANAGER];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if(!this.isStatusValid(value)){
      throw new Error(`${value} isn't in the status options`);
    }


  }
  private isStatusValid(status: any) {
    /**
     * @name isStatusValid()
     * @description status가 유효한지 검사하는 함수
     * @param status
     * @returns boolean
     * */

    const idx = this.StatusOptions.indexOf(status);
    return idx !== -1;
  }
}