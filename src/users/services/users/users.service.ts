import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private currId = 10;
    private usersData = [
        {
          id: 1,
          userName: 'user1',
          email: 'user1@example.com',
        },
        {
          id: 2,
          userName: 'user2',
          email: 'user2@example.com',
        },
        {
          id: 3,
          userName: 'user3',
          email: 'user3@example.com',
        },
        {
          id: 4,
          userName: 'user4',
          email: 'user4@example.com',
        },
        {
          id: 5,
          userName: 'user5',
          email: 'user5@example.com',
        },
        {
          id: 6,
          userName: 'user6',
          email: 'user6@example.com',
        },
        {
          id: 7,
          userName: 'user7',
          email: 'user7@example.com',
        },
        {
          id: 8,
          userName: 'user8',
          email: 'user8@example.com',
        },
        {
          id: 9,
          userName: 'user9',
          email: 'user9@example.com',
        },
        {
          id: 10,
          userName: 'user10',
          email: 'user10@example.com',
        }
    ];
    fetchUsers(){
        return this.usersData;
    }
    createUser(userDetails: CreateUserType){
        console.log("From Services",userDetails);
        this.currId = userDetails.id;
        this.usersData.push(userDetails);
        return {
            message: "User Data Inserted Sucessfully.....😊",
            data: this.usersData,
            currentId: this.currId
            }
    }
    fetchUserById(id:number){
      console.log("From Service",id);
      for(let i=0 ; i< this.usersData.length ; i++){
        // console.log(this.usersData[i]);
        if(this.usersData[i].id === id){
          return this.usersData[i]
        }
        else{
          continue
        }
      }
      return null
    }
    fetchUsersEmail(){
      var emails = [];
      for(let i in this.usersData){
        emails.push(this.usersData[i].email)
      }
      return emails;
    }
}
