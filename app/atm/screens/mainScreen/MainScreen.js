import classes from './MainsScreen.module.sass'
import CashButton from '@/components/cashButton/CashButton'

const MainScreen = () => {
    return (
        <div 
            className={classes.MainScreen}
        >
            <CashButton sum='sum' />
            <CashButton sum='sum' />
            <CashButton sum='sum' />
            <CashButton sum='sum' />
            <CashButton sum='sum' />
            <CashButton sum='sum' />
        </div>
    )
}

export default MainScreen