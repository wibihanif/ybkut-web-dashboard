import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const urlRegex =
  /^(http(s)?:\/\/)?((localhost)|(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}))(:(\d+))?(\/.*)?$/;

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: 'VITE_',
  server: {},
  client: {
    VITE_API_URL: z.string().min(1).regex(urlRegex, 'The given string is not a URL'),
    VITE_GOOGLE_CLIENT_ID: z.string().min(1),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnvStrict: {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  },
});
