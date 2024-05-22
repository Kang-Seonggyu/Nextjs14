import { API_URL } from '../../app/constants'
import styles from './movie-videos.module.css'

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`)

  return response.json()
}

export default async function MovieVideos({ id }: { id: string }) {
  const vidoes = await getVideos(id)
  return (
    <div className={styles.container}>
      {vidoes.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="acceleromter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  )
}
