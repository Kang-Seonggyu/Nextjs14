import { Suspense } from 'react'
import MovieInfo, {
  getMovie,
} from '../../../../components/movie-detail/movie-info'
import MovieVideos from '../../../../components/movie-detail/movie-videos'

interface MovieParams {
  params: { id: string }
}

export async function generateMetadata({ params: { id } }: MovieParams) {
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

export default async function Movies({ params: { id } }: MovieParams) {
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
