import styles from './page.module.sass'
import Atm from './atm/Atm'

export default function Home() {
  return (
    <>
      <h1 style={{color:'#539ac3', textAlign:'center'}}>ATM Cash</h1>
      <main className={styles.main}>
        <Atm />
      </main>
    </>
  )
}
