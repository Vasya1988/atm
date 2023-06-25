import styles from './page.module.sass'
import Atm from './atm/page'
import Link from 'next/link'

export default function Home({children}) {

  const elemenstOnPage = {
    dataCash: 'data-cash'
  }
  console.log('ddddd')
  
  
  const mainState = {}

  return (
    <>
      <Link
        href={'./atm'}
        className={styles.start} 
      >
        Let's start!
      </Link>
      <p>
        Hi there! <br/>
        I wanna show you an app atm machine <br/>
        Following code code calculates amount of banknotes to give out
        <br/><br/>Например: <br/>
          Выдать 1000 руб.<br/>
          500 руб. - 1 шт.<br/>
          100 руб. - 4 шт.<br/>
          50 руб. - 2 шт.<br/>
      </p>
      
    </>
  )
}
