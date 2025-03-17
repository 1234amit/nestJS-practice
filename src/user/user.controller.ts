import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('all')
    findAll(){
        return 'This action returns a list of all users';
    }
}
