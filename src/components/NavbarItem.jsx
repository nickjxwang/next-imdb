'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    return (
        <div>
            <Link
                className={`m-4 p-2 font-semibold hover:text-amber-600 ${
                    genre &&
                    genre === param &&
                    'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg'
                }`}
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    )
}
