import { ArgumentMetadata, 
  Injectable, 
  PipeTransform,  
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log("Inside ValidateCreateUserPipe...")
    console.log(value)
    console.log(metadata)
    const intAge = parseInt(value.age.toString());
    if(isNaN(intAge)){
      console.log(`${value.age} is not a number`)
      throw new HttpException('Invalid age input',HttpStatus.NOT_ACCEPTABLE)
    }
    return {...value, age: intAge}
  }
}
