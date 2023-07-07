import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";
import {UserStatus} from "./auth-statues.enum";

@Entity()
@Unique(['username']) // username 은 유니크해야 한다.
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  username : string;

  @Column()
  password: string;

  @Column()
  status: UserStatus;
}