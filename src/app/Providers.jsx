'use client'
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            <div className='min-h-screen text-gray-700 dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300 select-none'>
                {children}
            </div>
        </ThemeProvider>
    )
}
