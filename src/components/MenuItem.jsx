import Link from 'next/link'

export default function MenuItem({ title, address, Icon }) {
    return (
        <div>
            <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
                <Icon className='mx-4 text-2xl sm:hidden' />
                <p className='my-2 test-sm hidden sm:inline'>{title}</p>
            </Link>
        </div>
    )
}
