import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import {BoardRepository} from "./board.repository";
import {TypeOrmExModule} from "../database/typeorm-ex.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository]),AuthModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
