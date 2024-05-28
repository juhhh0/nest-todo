import { Body, Controller, Get, Post, Redirect, Render, Session } from '@nestjs/common';
import { AddTodoDto } from './dtos/addTodoDto';
import { TodoService } from './todo.service';
import { User } from 'src/user/user.entity';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @Redirect("/")
    @Post("/add")
    async addTodoList(@Body() body: AddTodoDto, @Session() session: Record<string, any>) {
        const user : User = session.user
        return await this.todoService.addTodoList(body, user)
    }
}
