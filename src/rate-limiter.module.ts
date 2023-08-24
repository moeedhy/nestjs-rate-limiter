import {
  Module,
  DynamicModule,
  MiddlewareConsumer,
  RequestMethod,
  Inject,
  NestModule,
  Global,
} from '@nestjs/common';
import { RateLimitMiddleware } from './rate-limiter.middleware';
import { Options } from 'express-rate-limit';

export interface RateLimitModuleOptions extends Options {
  routes?: { path: string; method?: RequestMethod }[];
}

export const RATE_LIMIT_MODULE_OPTIONS = 'RATE_LIMIT_MODULE_OPTIONS';

@Global()
@Module({})
export class RateLimitModule implements NestModule {
  static register(options: RateLimitModuleOptions): DynamicModule {
    return {
      module: RateLimitModule,
      providers: [
        {
          provide: RateLimitMiddleware,
          useValue: new RateLimitMiddleware(options),
        },
        {
          provide: RATE_LIMIT_MODULE_OPTIONS,
          useValue: options,
        },
      ],
      exports: [RateLimitMiddleware],
    };
  }

  constructor(
    @Inject(RATE_LIMIT_MODULE_OPTIONS) private options: RateLimitModuleOptions,
  ) {}

  configure(consumer: MiddlewareConsumer) {
    if (this.options.routes) {
      this.options.routes.forEach((route) => {
        consumer.apply(RateLimitMiddleware).forRoutes({
          path: route.path,
          method: route.method || RequestMethod.ALL,
        });
      });
    } else {
      consumer.apply(RateLimitMiddleware).forRoutes('*');
    }
  }
}
