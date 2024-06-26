import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly title: string;

  @Column({default: false})
  readonly completed: boolean;

  @CreateDateColumn()
  readonly createdAt: Date;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
