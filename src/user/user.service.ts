import { ConflictException, Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signupDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}
    async postSignup(body: SignupDto) {
        try{
            const { password } = body
             const hash = await bcrypt.hash(password, 10)
             const user = this.usersRepository.create({ ...body, password: hash })
             await this.usersRepository.save(user)

             return "User Created"
        }catch(e){
            throw new ConflictException(e.message)
        }
    }
}
