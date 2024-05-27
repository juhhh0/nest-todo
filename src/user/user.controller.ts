import { Controller, Get, Render } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get('signup')
    @Render('user/signup')
    getSignup() {}

    @Get('login')
    getLogin() {
        return 'This is the login page';
    }
}
