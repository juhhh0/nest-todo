import { IsString, IsEmail, Length, IsNotEmpty } from "class-validator"

export class SignupDto {

    @IsString()
    @IsNotEmpty()
    @Length(4, 20)
    readonly username: string

    @IsEmail()
    readonly email: string

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    readonly password: string

}