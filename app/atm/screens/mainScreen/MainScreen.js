import classes from './MainsScreen.module.sass'
import CashButton from '@/components/cashButton/CashButton'

const MainScreen = () => {
    return (
        <div 
            className={classes.MainScreen}
        >
            <div
                className={classes.Enter}
            >
                <input 
                    data-enter='enter' 
                    type='text'
                    placeholder='Enter your sum'
                />
            </div>
            <CashButton sum='10$' />
            <CashButton sum='20$' />
            <CashButton sum='50$' />
            <CashButton sum='100$' />
            <CashButton sum='500%' />
            <CashButton sum='1000%' />
            <CashButton sum='Settings' />
            <CashButton sum='Other sum' />
        </div>
    )
}

export default MainScreen