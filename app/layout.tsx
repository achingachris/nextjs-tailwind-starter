import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "../lib/PrelineScript";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

const baseURL = 'https://chrisdevcode.co.ke';
const defaultTitle = 'ChrisDevCode';
const defaultDescription = 'ChrisDevCode | technologies that may make sense';
const imagesBaseURL = 'https://chrisdevcode.co.ke';
const creatorName = 'Chris Achinga';

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    'Software Developers',
    'Developers in Mombasa',
    'Developers in Kenya',
    'Python Developers',
    'Django Developers in Kenya',
    'Django Developers in Mombasa',
    'Software Engineers',
  ],
  referrer: 'origin-when-cross-origin',
  creator: creatorName,
  publisher: `${defaultTitle} Technologies`,
  applicationName: defaultTitle,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: `${defaultTitle} Technologies`,
    description: 'Building technologies that may make sense',
    url: baseURL,
    siteName: defaultTitle,
    images: [
      {
        url: `${imagesBaseURL}/og.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${imagesBaseURL}/og-alt.png`,
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    videos: [
      {
        url: `${imagesBaseURL}/video.mp4`,
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: `${imagesBaseURL}/audio.mp3`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      new URL('/icon.png', baseURL),
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: `${imagesBaseURL}/manifest.json`,
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: [`${imagesBaseURL}/og.png`],
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
