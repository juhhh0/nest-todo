import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Todo } from "src/todo/todo.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly username: string;

  @Column({unique: true})
  readonly email: string;

  @Column()
  @Exclude()
  readonly password: string;

  @OneToMany(() => Todo, todo => todo.user)
  readonly todos: Todo[]
}