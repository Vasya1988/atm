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
                <span className={classes.result}>
                    got: 2700$<br/>
                    <br/>
                    1000: 2<br/>
                    500: 1<br/>
                    100: 2
                </span>
            </div>
            <CashButton dataName='10' sum='10$' />
            <CashButton dataName='20' sum='20$' />
            <CashButton dataName='50' sum='50$' />
            <CashButton dataName='100' sum='100$' />
            <CashButton dataName='500' sum='500%' />
            <CashButton dataName='1000' sum='1000%' />
            <CashButton dataName='settings' sum='Settings' />
            <CashButton dataName='other' sum='Other sum' />
        </div>
    )
}

export default MainScreen