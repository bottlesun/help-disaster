import {CustomRepository} from "../database/typeorm-ex.decorator";
import {Board} from "./board.entity";
import {Repository} from "typeorm";

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}