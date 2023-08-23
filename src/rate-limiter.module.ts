import { DynamicModule, Module, Global } from '@nestjs/common';
import { RateLimiterConfig } from './rate-limiter.interface';
import rateLimit from 'express-rate-limit';

@Global()
@Module({})
export class RateLimiterModule {
  static register(config: RateLimiterConfig): DynamicModule {
    return {
      module: RateLimiterModule,
      providers: [
        {
          provide: 'RATE_LIMITER_CONFIG',
          useValue: config,
        },
        {
          provide: 'RATE_LIMITER_MIDDLEWARE',
          useFactory: (config: RateLimiterConfig) => rateLimit(config),
          inject: ['RATE_LIMITER_CONFIG'],
        },
      ],
      exports: ['RATE_LIMITER_MIDDLEWARE'],
    };
  }
}
