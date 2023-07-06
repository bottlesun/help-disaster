import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatues } from './board-statues.enum';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable() // Injectable 은 NestJS 가 제공하는 데코레이터로, 이 데코레이터를 사용하면 클래스를 NestJS가 관리하는 Provider 로 만들어준다.
export class BoardsService {
  private boards: Board[] = []; // boards 라는 배열을 만들어준다.

  createBoards(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatues.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getAllBoards(): Board[] {
    return this.boards; // boards 를 리턴해준다.
  }

  getBoardById(id: Board['id']) {
    const found = this.boards.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
      // NotFoundException 은 NestJS 가 제공하는 예외처리 데코레이터이다.
    }
    return found;
  }

  deleteBoard(id: Board['id']): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((item) => item.id !== found.id);
  }

  updateBoardStatus(id: Board['id'], status: BoardStatues): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
