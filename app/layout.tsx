import { auth } from '@/auth';

import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/app/ui/global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col">
          <div>
            {session?.user?.name} {session?.user?.email}
          </div>
          <div className="flex-1">
            {children}
            <SpeedInsights />
          </div>
        </div>
      </body>
    </html>
  );
}
