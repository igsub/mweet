import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import MainLayout from '@/components/layout/MainLayout';
import { MweetUserProvider } from '@/contexts/MweetUserContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MweetUserProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MweetUserProvider>
    </UserProvider>
  );
}
