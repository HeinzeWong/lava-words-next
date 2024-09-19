import '../globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { SiteConfig } from '@/lib/config/site';
import CustomHead from '@/components/common/head';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import { ThemeProvider } from '@/context/ThemeContext';

export default async function RootLayout ({ children }) {
	return (
			<div className='w-full min-h-svh text-base-content bg-base-100'>
				<div className='px-5'>{children}</div>
			</div>
	);
}
