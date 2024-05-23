import styles from './about_me.module.css'

export const metadata = {
  title: 'About Me',
}

export default function Layout({
  children,
  todos,
  characters,
}: {
  children: React.ReactNode
  todos: React.ReactNode
  characters: React.ReactNode
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <div>{todos}</div>
          <div>{characters}</div>
        </div>
        <div className={styles.rightside}>Something New!</div>
      </div>
      {children}
      &copy; Next JS is great!
    </>
  )
}
