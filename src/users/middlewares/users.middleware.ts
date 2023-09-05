import { Injectable,
        NestMiddleware,
        HttpException,
        HttpStatus
      } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("UsersMiddleware is working properly....👍")
    const { authorization } = req.headers;
    console.log(authorization);
    if(!authorization){
       throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN)
    }
    if( authorization === 'Bearer bcit-076') next();
    else{
      throw new HttpException('Invalid Authorization Token', HttpStatus.FORBIDDEN)
    }
  }
}
