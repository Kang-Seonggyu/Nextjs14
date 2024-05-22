import { Suspense } from 'react'
import MovieInfo from '../../../../components/movie-detail/movie-info'
import MovieVideos from '../../../../components/movie-detail/movie-videos'

export const metadata = {
  title: 'Movies',
}

export default async function Movies({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <div>
      <Suspense fallback={<h3>Loading movie info</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading movie videos</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}
