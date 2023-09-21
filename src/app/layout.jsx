import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
    title: 'IMDb',
    description: 'This is IMDb clone website',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
