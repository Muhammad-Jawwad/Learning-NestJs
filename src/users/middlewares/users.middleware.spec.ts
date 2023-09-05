import { MiddlewaresMiddleware } from './users.middleware';

describe('UsersMiddleware', () => {
  it('should be defined', () => {
    expect(new MiddlewaresMiddleware()).toBeDefined();
  });
});
