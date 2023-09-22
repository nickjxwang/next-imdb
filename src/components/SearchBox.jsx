'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = e => {
        e.preventDefault()
        if (!search) return
        router.push(`/search/${search}`)
        setSearch('')
    }
    return (
        <form
            onSubmit={handleSubmit}
            className='flex px-5 max-w-6xl mx-auto justify-between items-center'
        >
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type='text'
                placeholder='Search keywords...'
                className='w-full h-14 flex-1 rounded-sm placeholder-gray-500 outline-none bg-transparent'
            />
            <button
                disabled={!search}
                type='submit'
                className='text-amber-600 disabled:text-gray-400 '
            >
                Search
            </button>
        </form>
    )
}
