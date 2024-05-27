import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Portfolio of Jorge Aguilar - Software Developer',
    description: 'This is the portfolio of Jorge Aguilar. I am a fourth year CS Student at UCR and an incoming SDE @ Amazon. I love to learn new things and I am always open to collaborating with others.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
        </main>
        </body>
        </html>
    );
}

