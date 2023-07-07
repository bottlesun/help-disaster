import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BoardStatues} from "./board-statues.enum";

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
}