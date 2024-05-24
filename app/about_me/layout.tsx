import styles from './about_me.module.css'

export const metadata = {
  title: 'About Me',
}

export default function Layout({
  children,
  todos,
  onepiece,
  crayon_shin,
}: {
  children: React.ReactNode
  todos: React.ReactNode
  onepiece: React.ReactNode
  crayon_shin: React.ReactNode
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <div>{todos}</div>
          <div>
            <input
              type="radio"
              name="character"
              id="onepiece"
              value="onepiece"
            />
            <label htmlFor="onepiece">원피스</label>
            <input
              type="radio"
              name="character"
              id="crayon_shin"
              value="crayon_shin"
            />
            <label htmlFor="crayon_shin">짱구</label>
            <div id="onepiece_char">{onepiece}</div>
            <div id="crayon_shin_char">{crayon_shin}</div>
          </div>
        </div>
        <div className={styles.rightside}>Something New!</div>
      </div>
      {children}
      &copy; Next JS is great!
    </>
  )
}
