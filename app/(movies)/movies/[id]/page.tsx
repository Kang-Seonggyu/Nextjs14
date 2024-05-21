import { API_URL } from '../../../(home)/page'

export const metadata = {
  title: 'Movies',
}

async function getMovie(id: string) {
  console.log(`Fetcing movies: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${API_URL}/${id}`)

  return response.json()
}

async function getVideos(id: string) {
  console.log(`Fetcing videos: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${API_URL}/${id}/videos`)

  return response.json()
}

export default async function Movies({
  params: { id },
}: {
  params: { id: string }
}) {
  console.log('start fetching')
  // 아래처럼 각각 따로 fetch 호출 시, 각 라인이 끝난 후 다음을 호출해 오래걸림.
  // const movie = await getMovie(id)
  // const videos = await getVideos(id)

  // 아래처럼 병렬 실행을 해주면 Loading 시간을 기다리지 않고 동시 처리.
  const [movie, vidoes] = await Promise.all([getMovie(id), getVideos(id)])
  console.log('end fetching')

  return <h1>{movie.title}</h1>
}
