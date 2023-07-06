import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { BoardStatues } from '../board-statues.enum';

export class BoardStatusPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatues.PUBLIC, BoardStatues.PRIVATE];
  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      // status가 유효하지 않으면 에러를 던진다.
      throw new Error(`${value} isn't in the status options`);
    }
    return value;
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
