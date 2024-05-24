import styles from './onepiece.module.css'

async function getOnepice() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('http://localhost:5174/test/onepiece')
  const json = await response.json()
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return json
}

export default async function Characters() {
  const onepiece = await getOnepice()

  return (
    <ul className={styles.charList}>
      {onepiece.map((char) => (
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
