import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://YOUR_SENTRY_DSN_HERE", // Replace with your real DSN from sentry.io
  tracesSampleRate: 1.0,
});
