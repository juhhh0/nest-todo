import { Injectable } from '@nestjs/common';
import { AddTodoDto } from './dtos/addTodoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todosRepository: Repository<Todo>,
  ) {}

  async addTodoList(body: AddTodoDto, user: User) {
    const { title } = body;
    const todo = this.todosRepository.create({ title });
    todo.user = user;
    await this.todosRepository.save(todo);

  }
}
