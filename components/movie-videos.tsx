import { API_URL } from '../app/(home)/page'

async function getVideos(id: string) {
  console.log(`Fetcing videos: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${API_URL}/${id}/videos`)

  return response.json()
}

export default async function MovieVideos({ id }: { id: string }) {
  const vidoes = await getVideos(id)
  return <h6>{JSON.stringify(vidoes)}</h6>
}
