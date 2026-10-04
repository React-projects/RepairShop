'use client'; // Error boundaries must be Client Components
import * as sentry from '@sentry/nextjs';
export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
   sentry.captureException(error);
   return (
      <div>
         <h2>Something went wrong!</h2>
         <button onClick={() => retry()}>Try again</button>
      </div>
   );
}
