import styles from './page.module.sass'
import Atm from './atm/page'

export default function Home({children}) {

  const elemenstOnPage = {
    dataCash: 'data-cash'
  }
  console.log('ddddd')
  
  
  const mainState = {}

  return (
    <>
      <Atm/>
    </>
  )
}
