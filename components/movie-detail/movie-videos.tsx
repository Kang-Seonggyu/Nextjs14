import { API_URL, Video } from '../../app/constants'
import MovieVideo from './movie-videos-video'
import styles from './movie-videos.module.css'

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`)

  return response.json()
}

export default async function MovieVideos({ id }: { id: string }) {
  const vidoes = await getVideos(id)
  return (
    <div className={styles.container}>
      {vidoes.map((video: Video) => (
        <MovieVideo video={video} />
      ))}
    </div>
  )
}
