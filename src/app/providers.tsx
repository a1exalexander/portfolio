'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import mediumZoom from 'medium-zoom';

if (typeof window !== 'undefined') {
  mediumZoom('[data-zoomable]');
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
