import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardStatues } from './board-statues.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusPipe } from './pipe/board-status.pipe';
import {Board} from "./board.entity";

@Controller('/boards')
export class BoardsController {
  // Service 에서 Controller 사용 할 수 있게 해주기
  constructor(private boardsService: BoardsService) {
    this.boardsService = boardsService; // boardsService 를 boardsService 로 사용하겠다.
  }


  @Post()
  createBoard(@Body() createBoardDto : CreateBoardDto){
    return this.boardsService.createBoards(createBoardDto);
  }

  @Get()
  getAllBoards(){
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id : number) : Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id : number) : Promise<void> {
    return this.boardsService.deleteBoard(id)
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id :number,
    @Body('status', BoardStatusPipe) status : BoardStatues
  ) : Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status)
  }
}
