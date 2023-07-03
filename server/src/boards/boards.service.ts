import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(
    title: string,
    description: string,
    status: boolean | undefined,
  ): Board {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: status ? BoardStatus.PRIVATE : BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
