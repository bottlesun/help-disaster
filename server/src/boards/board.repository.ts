import {CustomRepository} from "../database/typeorm-ex.decorator";
import {Repository} from "typeorm";
import {Board} from "../entity/board.entity";

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}