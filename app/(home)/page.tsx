import Movie from '../../components/movie/movie'
import styles from './home.module.css'

export const metadata = {
  title: 'Home',
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
  // 아래 로딩을 추가했을 때, loading.tsx 없으면, 로딩이 끝나기 전까지 페이지 진입을 못함.
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies()

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  )
}
