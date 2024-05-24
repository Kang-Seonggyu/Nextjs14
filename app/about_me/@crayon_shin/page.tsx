import styles from './crayon_shin.module.css'

async function getShin() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('http://localhost:5174/test/crayon_shin')
  const json = await response.json()
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return json
}

export default async function Characters() {
  const shin = await getShin()

  return (
    <ul className={styles.charList}>
      {shin.map((char) => (
        <li>
          <img src={char.img} alt={char.name} />
          <div>
            <h2>{char.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  )
}
