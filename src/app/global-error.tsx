'use client'; // Error boundaries must be Client Components
import * as sentry from '@sentry/nextjs';

export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
   sentry.captureException(error);
   return (
      // global-error must include html and body tags
      <html>
         <body>
            <h2>Something went wrong!</h2>
            <button onClick={() => retry()}>Try again</button>
         </body>
      </html>
   );
}
