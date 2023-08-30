'use client'
import { useContext, useState } from 'react'
import classes from './main.module.sass'
import CashButton from '@/components/cashButton/CashButton'
import Title from '@/components/title/Title'
import MyContext, { useGlobalContext } from '../../Context/context'


const digitsValidate = (prop) => {
    console.log(!Number(prop))
    return Number(prop)
}

const Main = (props) => {

    const { takeCash, setTakeCash, totalSumOfClick, setTotalSumOfClick, getCash, setGetCash, getMoney, stateBanknote, setStateBanknote } = useGlobalContext()

    // const [takeCash, setTakeCash] = useState(null)

    const buttonSumValue = ['10$', '20$', '50$', '100$', '500$', '1000$', 'Settings', 'Other sum']

    const showCash = getCash != '' && takeCash != null
        ? Object.keys(takeCash).reverse().map(e => {
            // console.log(`${e}: ${takeCash[e]}`)
            return <span data-show key={e}>{e}$: {takeCash[e]}<br/></span>
        })
        : ''
    
    const onClickHandle = (event) => {
        const sumOfDollars = event.currentTarget.dataset.cash
        console.log(sumOfDollars)

        sumOfDollars === 'Other sum' ?
            (setTotalSumOfClick(0),
            document.querySelector('[data-enter="enter"]').value = '')
        : sumOfDollars === 'Settings' ?
            (setTotalSumOfClick(0),
            document.querySelector('[data-enter="enter"]').value = '')
        : (document.querySelector('[data-enter="enter"]').value = '',
            setTotalSumOfClick(Number(totalSumOfClick) + Number(sumOfDollars))
        )
    }

   
    !totalSumOfClick === 0 
        ? getMoney(totalSumOfClick)
        : true
    // console.log(Object.keys(getMoney(450)))
    

    return (
        <>
            <Title tag='h2' text={totalSumOfClick != 0 ? totalSumOfClick : ''} />
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
                            !Number(cash.target[0].value) 
                                ? (
                                    alert('Введите цифры'), cash.target[0].value='', 
                                    setGetCash('')
                                ) 
                                : (
                                    !getMoney(cash.target[0].value) 
                                        ? cash.target[0].value='' 
                                        : (setGetCash(`Got: ${cash.target[0].value}$`), console.log(cash.target[0].value), cash.target[0].value='')
                                )
                        }}
                    >
                        <input 
                            data-enter='enter' 
                            type='text'
                            placeholder='Enter your sum'
                            onChange={e => setTotalSumOfClick(e.target.value)}
                        />
                    </form>
                    <span className={classes.result}>
                        {`${getCash}`}<br/>
                        <br/>
                        {showCash}
                    </span>
                </div>
                {buttonSumValue.map(banknote => <CashButton
                    clickHandle={onClickHandle}
                    key={banknote} 
                    dataName={banknote.replace('$', '')} 
                    sum={`${banknote}`}
                />)}
            </div>
        </>
    )
}

export default Main