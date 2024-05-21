export const metadata = {
  title: 'Home',
}

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
  // 아래 로딩을 추가했을 때, loading.tsx 없으면 페이지 진입을 못함.
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(URL)
  const json = await response.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies()

  return <div>{JSON.stringify(movies)}</div>
}
