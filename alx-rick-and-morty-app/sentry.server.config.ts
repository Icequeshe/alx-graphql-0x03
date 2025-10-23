import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://YOUR_SENTRY_DSN_HERE",
  tracesSampleRate: 1.0,
});
