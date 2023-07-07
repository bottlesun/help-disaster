import {Injectable, NotFoundException} from '@nestjs/common';
import {BoardStatues} from './board-statues.enum';
import {CreateBoardDto} from './dto/create-board.dto';
import {Board} from "./board.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {BoardRepository} from "./board.repository";

@Injectable() // Injectable 은 NestJS 가 제공하는 데코레이터로, 이 데코레이터를 사용하면 클래스를 NestJS가 관리하는 Provider 로 만들어준다.
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository
  ) {
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({id: id});

    if(!found) throw new NotFoundException(`Can't find Board with id ${id}`);

    return found;
  }

  async createBoards(createBoardDto : CreateBoardDto) : Promise<Board> {
    const {title , description} = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status : BoardStatues.PUBLIC
    });

    await this.boardRepository.save(board);
    return board;
  }

  async getAllBoards() : Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async deleteBoard(id: number) : Promise<void> {
    const result = await this.boardRepository.delete({id: id});
    //  console.log('result', result); //result DeleteResult { raw: [], affected: 1 }
    if(result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    }
  }

  async updateBoardStatus(id: number , status : BoardStatues) :Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
