import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import MainLayout from '@/components/layout/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UserProvider>
  );
}
