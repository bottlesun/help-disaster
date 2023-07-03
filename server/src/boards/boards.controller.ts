import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  // 접근 제한자를 생성자 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.
  constructor(private boardsService: BoardsService) {}

  @Get('/') // GET /boards
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  // UsePipes는 파이프를 사용한다는 뜻이다.
  // ValidationPipe는 dto에 선언된 유효성 검사를 실행한다.
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    // BoardStatusValidationPipe는 파이프를 사용한다는 뜻이다.
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
