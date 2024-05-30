import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Redirect,
  Render,
  Session,
} from '@nestjs/common';
import { AddTodoDto } from './dtos/addTodoDto';
import { TodoService } from './todo.service';
import { User } from 'src/user/user.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Redirect('/')
  @Post('/add')
  async addTodoList(
    @Body() body: AddTodoDto,
    @Session() session: Record<string, any>,
  ) {
    const user: User = session.user;
    return await this.todoService.addTodoList(body, user);
  }

  @Redirect('/')
  @Post('/complete/:id')
  async updateTodo(@Param('id') id: string, @Body() body: any) {
    const completed = body.checked == 'on';
    const todo = await this.todoService.updateTodo(Number(id), completed);
    return todo;
  }

  @Redirect('/')
  @Post('/delete/:id')
  async deleteTodo(@Param('id') id: string) {
    const todo = await this.todoService.deleteTodo(Number(id));
    return todo;
  }
}
