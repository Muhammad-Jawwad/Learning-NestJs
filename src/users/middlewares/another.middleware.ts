import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AnotherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("Another Middleware is calling...")
    next();
  }
}
