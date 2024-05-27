import { IsString, IsEmail, Length, IsNotEmpty } from "class-validator"

export class LoginDto {

    @IsEmail()
    readonly email: string

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    readonly password: string

}