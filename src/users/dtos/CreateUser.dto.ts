import { IsEmail, IsNotEmpty } from "class-validator";

export class createUserDto {
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    age: number
}