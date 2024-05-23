import styles from './movie-videos-video.module.css'
import { Video } from '../../app/constants'

export default async function MovieVideo({ video }: { video: Video }) {
  return (
    <div className={styles.container}>
      <iframe
        key={video.id}
        src={`https://youtube.com/embed/${video.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
        title={video.name}
      />
    </div>
  )
}
