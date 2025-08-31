import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Sergio Forcén Asensio - Developer',
	description:
		'Benvigut al meu portfolio!',
	keywords: [
		'Sergio Forcén Asensio',
	],
	authors: [{ name: 'Sergio Forcén Asensio' }],
	creator: 'Sergio Forcén Asensio',
	openGraph: {
		title: 'Sergio Forcén Asennsio - Portfolio',
		description: 'Desenvolupador web fullstack.s',
		url: 'sforceas.github.io',
		siteName: 'sforceas - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Sergio Forcén Asensio - Developer Portfolio',
			},
		],
		locale: 'ca',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sergio Forcén Asensio - Developer',
		description: 'Desenvolupador fullstack web.',
		creator: '@sforceas',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
