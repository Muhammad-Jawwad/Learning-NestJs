import { 
    Controller, 
    Get, 
    Post, 
    Patch, 
    Body, 
    Req, 
    Res, 
    Param, 
    Query, 
    ValidationPipe, 
    UsePipes, 
    ParseIntPipe, 
    HttpException, 
    HttpStatus, 
    UseGuards 
} from '@nestjs/common';

import { 
    Request, 
    Response 
} from 'express';

import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    @UseGuards(AuthGuard)
    getUsers(){
        return this.userService.fetchUsers();
    }

    @Get('emails')
    getUsersEmail(){
        let data = this.userService.fetchUsersEmail();
        return data;
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userDetails:createUserDto ) {
        console.log(userDetails)
        console.log(userDetails.age.toPrecision());
        let msg = this.userService.createUser(userDetails);
        return msg;
    }

    @Patch('update')
    @UsePipes(new ValidationPipe())
    updateUserById(@Body(ValidateCreateUserPipe) userDetails:createUserDto){
        console.log(userDetails);
        let data = this.userService.updateUserById(userDetails);
        if(!data){
            throw new HttpException('User to be updated not found',HttpStatus.BAD_REQUEST);
        }
        return {data:data, message:"The user data has been updated"}
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        console.log(id);
        let res = this.userService.fetchUserById(id);
        if(!res){
            throw new HttpException('No User found at that id....😢', HttpStatus.NOT_FOUND)
        }
        return res
    }

    // @Get()
    // getUsersSorted(@Query('sortBy') sortBy: string){
    //     console.log(sortBy)
    //     return [{ userName: "Jawwad", email: "muhammadjawwad417@gmail.com", sortBy }];
    // }

}
