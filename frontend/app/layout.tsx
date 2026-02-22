import type { Metadata } from 'next';
import '../src/styles/tailwind.css';
import '../src/styles/globals.css';

export const metadata: Metadata = {
  title: 'CarHere - All Car Services at One Place',
  description: 'Find and book all car services in one convenient platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
