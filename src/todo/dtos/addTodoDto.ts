import { IsString, IsNotEmpty } from "class-validator"

export class AddTodoDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string
}