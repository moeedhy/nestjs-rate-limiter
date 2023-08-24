
# Nest.js Rate Limiter Module

A simple and efficient rate limiting module for Nest.js applications. It leverages `express-rate-limit` to protect your application from abuse by limiting the number of requests that a client can make within a defined time window.

## Installation

First, install the module using npm:

```bash
npm install @moeed/nestjs-rate-limiter --save
```

Make sure to also have `express-rate-limit` installed, as it is a peer dependency.

## Usage

Import the `RateLimiterModule` into your root module and configure it using the `register` method:

```typescript
import { RateLimitModule } from '@moeed/nestjs-rate-limiter';

@Module({
  imports: [
    RateLimiterModule.register({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
    // ... other modules
  ],
})
export class AppModule {}
```

### Custom Routes

You can specify custom routes to apply rate limiting by using the `routes` option:

```typescript
RateLimiterModule.register({
  windowMs: 15 * 60 * 1000,
  max: 100,
  routes: [
    { path: '/api', method: RequestMethod.ALL },
    { path: '/auth/login', method: RequestMethod.POST },
  ],
})
```

## Options

The following options can be used to configure the rate-limiting behavior:

- `windowMs`: The duration in milliseconds to keep track of requests (default: `60000`).
- `max`: The maximum number of requests allowed within `windowMs` (default: `5`).
- `routes`: An optional array of custom routes to apply rate limiting.

See the [`express-rate-limit` documentation](https://www.npmjs.com/package/express-rate-limit) for more options and details.

## Features

- Easy integration with existing Nest.js applications.
- Extends `express-rate-limit`, allowing for a wide range of customization.
- Global module availability.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/moeedhy/nestjs-rate-limiter/issues) or open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Support

If you find this package useful, please consider starring the repository on GitHub or sharing it with your colleagues.



