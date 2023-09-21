import Image from 'next/image'

async function getMovie(movieId) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    )
    return await res.json()
}

export default async function MoviePage({ params }) {
    const movieId = params.id
    const movie = await getMovie(movieId)
    const {
        backdrop_path,
        poster_path,
        title,
        name,
        overview,
        release_date,
        first_air_date,
        vote_count,
    } = movie
    return (
        <div className='w-full'>
            <div className='max-w-6xl mx-auto flex flex-col items-center content-center p-4 md:pt-8 md:flex-row md:space-x-6'>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        backdrop_path || poster_path
                    }`}
                    width={500}
                    height={300}
                    alt='Movie poster'
                    className='rounded-lg'
                    style={{
                        maxWidth: '100%',
                        height: '100%',
                    }}
                    placeholder='blur'
                    blurDataURL='/spinner.svg'
                ></Image>
                <div className='p-2'>
                    <h2 className='text-lg font-bold mb-3'>{title || name}</h2>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1'>Overview:</span>
                        {overview}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>
                            Date Released:
                        </span>
                        {release_date || first_air_date}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Rating:</span>
                        {vote_count}
                    </p>
                </div>
            </div>
        </div>
    )
}
