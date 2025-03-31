import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {

    @Get('all')
    findAll(){
        return 'This action returns a list of all users';
    }

    constructor(
        private readonly userService:UserService,
        private readonly commentServices: CommentService
    ){}
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Post("/add-user")
    create(@Body() createUserDto:createUserDto) {
        return this.userService.create(createUserDto);
    }

    @Post(":id/comments")
    getUserComments(@Param(`id`) id:string){
        return this.commentServices.findUserComments(id)
    }
}
