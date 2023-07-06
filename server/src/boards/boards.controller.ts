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
import { Board, BoardStatues } from './board-statues.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusPipe } from './pipe/board-status.pipe';

@Controller('/boards')
export class BoardsController {
  // Service 에서 Controller 사용 할 수 있게 해주기
  constructor(private boardsService: BoardsService) {
    this.boardsService = boardsService; // boardsService 를 boardsService 로 사용하겠다.
  }

  @Post()
  @UsePipes(ValidationPipe) // 파이프를 사용하면 dto에서 설정한 유효성 검사를 자동으로 해준다.
  createBoards(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoards(createBoardDto);
  }

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusPipe) status: BoardStatues,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
