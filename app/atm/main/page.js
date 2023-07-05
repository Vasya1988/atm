'use client'
import { useState } from 'react'
import classes from './main.module.sass'
import CashButton from '@/components/cashButton/CashButton'

const digitsValidate = (prop) => {
    console.log(!Number(prop))
    return Number(prop)
}

const Main = (props) => {
    const [getCash, setGetCash] = useState('')

    return (
        <div 
            className={classes.MainScreen}
        >
            <div
                className={classes.Enter}
            >
                <form
                    style={{textAlign: 'center'}}
                    onSubmit={(cash) => {
                        cash.preventDefault()
                        !Number(cash.target[0].value) ? (alert('Введите цифры'), cash.target[0].value='', setGetCash('')) : setGetCash(`${cash.target[0].value} $`)
                        
                    }}
                >
                    <input 
                        data-enter='enter' 
                        type='text'
                        placeholder='Enter your sum'
                    />
                </form>
                <span className={classes.result}>
                    got: {`${getCash}`}<br/>
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

export default Main