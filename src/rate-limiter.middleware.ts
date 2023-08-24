import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import rateLimit, { Options } from 'express-rate-limit';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private readonly rateLimiter: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => void;

  constructor(options: Options) {
    this.rateLimiter = rateLimit(options);
  }

  use(req: Request, res: Response, next: NextFunction) {
    this.rateLimiter(req, res, next);
  }
}
