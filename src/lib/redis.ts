import { Redis } from '@upstash/redis';

// For static exports (GitHub Pages), Upstash Redis cannot be used at runtime
// since there's no server to handle API routes. This config is only used during build.
// The environment variables are optional to allow builds to succeed without them.
export const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;
