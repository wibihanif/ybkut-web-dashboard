import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { ApiClientProvider } from './providers/ApiClientProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosManager } from './lib/axios.ts';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { env } from './config/env.ts';
import { Notifications } from '@mantine/notifications';
import '@fontsource/inter/400.css';
import { OverridedComponents } from '../src/theme/overrides';
import { ModalsProvider } from '@mantine/modals';

const queryClient = new QueryClient();
const axiosManager = new AxiosManager();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
      <ApiClientProvider axiosManager={axiosManager}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                fontFamily: 'Inter, sans-serif',
                colors: {
                  brand: [
                    // '007bff',
                    '608fff',
                    '89a4ff',
                    'abbaff',
                    'c9d0ff',
                    'e4e7ff',
                    'ffffff',
                  ],
                },
                primaryColor: 'brand',
                components: OverridedComponents,
              }}>
              <ModalsProvider>
                <Notifications />
                <App />
              </ModalsProvider>
            </MantineProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </ApiClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
