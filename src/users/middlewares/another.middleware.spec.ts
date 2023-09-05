import { AnotherMiddleware } from './another.middleware';

describe('Middleware', () => {
  it('should be defined', () => {
    expect(new AnotherMiddleware()).toBeDefined();
  });
});
