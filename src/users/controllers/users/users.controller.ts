import { Controller, Get, Post,Body, Req, Res, Param, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    // @Get()
    // getUsers(){
    //     return [{ userName: "Jawwad", email: "muhammadjawwad417@gmail.com"}];
    // }

    @Get('subjects')
    getUsersSubjects(){
        return [{
             userName: "Jawwad", 
             email: "muhammadjawwad417@gmail.com",
             subjects: [
                {
                    id: 1,
                    title: 'English'
                },
                {
                    id: 2,
                    title: 'Urdu'
                },
                {
                    id: 3,
                    title: 'Computer'
                },
                {
                    id: 1,
                    title: 'Physics'
                }
             ]
            }];
    }

    @Post('create')
    createUser(@Body() body:createUserDto ) {
        console.log(body)
        return body;
    }

    // @Get(':id')
    // getUserById(@Req() request: Request, @Res() response:Response){
    //     console.log(request.params);
    // }

    @Get(':id')
    getUserById(@Param('id') id: string){
        console.log(id);
        return {id}
    }

    @Get()
    getUsersSorted(@Query('sortBy') sortBy: string){
        console.log(sortBy)
        return [{ userName: "Jawwad", email: "muhammadjawwad417@gmail.com", sortBy }];
    }

}
