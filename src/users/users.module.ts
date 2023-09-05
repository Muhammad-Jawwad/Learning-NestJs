import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { UsersMiddleware } from './middlewares/users.middleware';
import { AnotherMiddleware } from './middlewares/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(UsersMiddleware).exclude('users/create').forRoutes(UsersController)
    consumer.apply(UsersMiddleware)
              .forRoutes('users/create')
            .apply(AnotherMiddleware)
              .forRoutes('users/create');
  }
}