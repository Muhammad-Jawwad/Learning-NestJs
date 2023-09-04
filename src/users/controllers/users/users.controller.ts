import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return [{ userName: "Jawwad", email: "muhammadjawwad417@gmail.com"}];
    }

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
}
