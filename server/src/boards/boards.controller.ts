import {
  Body,
  Controller,
  Delete,
  Get, Logger,
  Param,
  Patch,
  Post, UseGuards,
} from '@nestjs/common';
import { BoardStatues } from './board-statues.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusPipe } from './pipe/board-status.pipe';
import {AuthGuard} from "@nestjs/passport";
import {Board} from "../entity/board.entity";
import {GetUser} from "../auth/get-user.decorator";
import {User} from "../entity/user.entity";

@Controller('/boards')
@UseGuards(AuthGuard()) // 컨트롤러 레벨에서 가드 설정
export class BoardsController {
  // Service 에서 Controller 사용 할 수 있게 해주기
  private logger = new Logger('Boards');
  constructor(private boardsService: BoardsService) {
    this.boardsService = boardsService; // boardsService 를 boardsService 로 사용하겠다.
  }


  @Post()
  createBoard(
    @Body() createBoardDto : CreateBoardDto,
    @GetUser() user : User
  ) : Promise<Board>{
    this.logger.verbose(`User ${user.username} trying to create a new board. Payload : ${JSON.stringify(createBoardDto)}`);
    return this.boardsService.createBoards(createBoardDto , user);
  }

  @Get()
  getAllBoards(
    @GetUser() user : User
  ){
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(
    @Param('id') id : number,
    @GetUser() user : User
  ) : Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id : number) : Promise<void> {
    return this.boardsService.deleteBoard(id)
  }

  @Patch('/status/:id')
  updateBoardStatus(
    @Param('id') id :number,
    @Body('status', BoardStatusPipe) status : BoardStatues
  ) : Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status)
  }
}
