import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BoardStatues} from "../boards/board-statues.enum";
import {User} from "./user.entity";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatues;

  @ManyToOne(type => User, user => user.boards, {eager: false})
  user: User;

}