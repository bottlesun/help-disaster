import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  // 접근 제한자를 생성자 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.
  constructor(private boardsService: BoardsService) {}

  @Get('/') // GET /boards
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }
}
