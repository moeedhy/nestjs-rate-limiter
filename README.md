
# Nest.js Rate Limiter Module

A simple and efficient rate limiting module for Nest.js applications. It leverages `express-rate-limit` to protect your application from abuse by limiting the number of requests that a client can make within a defined time window.

## Installation

First, install the module using npm:

```bash
npm install @moeed/nestjs-rate-limiter --save
```

Make sure to also have `express-rate-limit` installed, as it is a peer dependency.

## Usage

1. **Import the Module**:
   Import the `RateLimiterModule` into your desired Nest.js module and register it with the desired configuration.

```typescript
import { RateLimiterModule } from '@moeed/nestjs-rate-limiter';

@Module({
  imports: [
    RateLimiterModule.register({
      maxRequests: 100,
      windowMs: 15 * 60 * 1000, // 15 minutes
    }),
  ],
})
export class AppModule {}
```

2. **Configuration Options**:
   The module accepts all options available in `express-rate-limit`. See [express-rate-limit documentation](https://www.npmjs.com/package/express-rate-limit) for more details.

## Features

- Easy integration with existing Nest.js applications.
- Extends `express-rate-limit`, allowing for a wide range of customization.
- Global module availability.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](link-to-issues-page) or open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Support

If you find this package useful, please consider starring the repository on GitHub or sharing it with your colleagues.

