import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {UserStatus} from "../auth/auth-statues.enum";
import {Board} from "./board.entity";

@Entity()
@Unique(['username']) // username 은 유니크해야 한다.
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  status: UserStatus;

  @OneToMany(type => Board, board => board.user, {eager: true})
  boards: Board[];
}