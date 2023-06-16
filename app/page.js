import styles from './page.module.sass'
import Atm from './atm/Atm'

export default function Home() {

  const mainState = {}

  return (
    <>
      <main className={styles.main}>
        <Atm />
      </main>
    </>
  )
}
