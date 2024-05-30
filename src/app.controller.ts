import { Controller, Get, Render, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  @Render('home')
  async getHome(@Session() session: Record<string, any>) {
    const todos = await this.todoService.getUserTodos(session.user)
    return { todos }
  }
}
