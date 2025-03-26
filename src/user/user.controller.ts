import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommonExecOptions } from 'child_process';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')


export class UserController {
    constructor(private readonly userService:UserService, private readonly commentService:CommentService){}
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Get(":id/comments")
    getUserComment(@Param("id") id:string){
        return this.commentService.findUserComments(id);
    }

}
