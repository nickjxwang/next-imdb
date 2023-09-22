import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({ result }) {
    const {
        id,
        backdrop_path,
        poster_path,
        overview,
        title,
        name,
        first_air_date,
        release_date,
        vote_count,
    } = result
    return (
        <div className='max-w-lg mx-auto cursor-pointer rounded-lg sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`/movie/${id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        backdrop_path || poster_path
                    }`}
                    width={600}
                    height={300}
                    alt='image is not available'
                    className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                    placeholder='blur'
                    blurDataURL='/spinner.svg'
                ></Image>
                <div className='p-3 space-y-2'>
                    <p className='line-clamp-3 text-base'>{overview}</p>
                    <h2 className='truncate text-lg font-bold'>
                        {title || name}
                    </h2>
                    <div className='flex justify-between items-center'>
                        {release_date || first_air_date}
                        <div className='flex items-center'>
                            <FiThumbsUp className='h-5 mr-2' />
                            {vote_count}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
