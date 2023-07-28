'use client'
import { useState } from 'react'
import classes from './main.module.sass'
import CashButton from '@/components/cashButton/CashButton'
import Title from '@/components/title/Title'


const digitsValidate = (prop) => {
    console.log(!Number(prop))
    return Number(prop)
}



const Main = (props) => {
    const [getCash, setGetCash] = useState('')

    const [takeCash, setTakeCash] = useState(null)

    const [stateBanknote, setStateBanknote] = useState([])

    const buttonSumValue = ['10$', '20$', '50$', '100$', '500$', '1000$', 'Settings', 'Other sum']

    const showCash = getCash != '' && takeCash != null
        ? Object.keys(takeCash).reverse().map(e => {
            // console.log(`${e}: ${takeCash[e]}`)
            return <span data-show key={e}>{e}$: {takeCash[e]}<br/></span>
        })
        : ''

    let [totalSumOfClick, setTotalSumOfClick] = useState(0)

    
    const onClickHandle = (event) => {
        const sumOfDollars = event.currentTarget.dataset.cash
        console.log(sumOfDollars)
        sumOfDollars === 'Other sum' ?
            setTotalSumOfClick(0)
        : sumOfDollars === 'Settings' ?
            setTotalSumOfClick(0)
        : setTotalSumOfClick(totalSumOfClick + Number(sumOfDollars))
    }

    // ---------------------------- Вычисление ---------------------------- //
    const getMoney = (amount, 
        banknotes = [
            {banknote: 1000, amount: 4, status: 'ready'},
            {banknote: 500, amount: 4, status: 'ready'},
            {banknote: 100, amount: 4, status: 'ready'},
            {banknote: 50, amount: 4, status: 'ready'},
            {banknote: 20, amount: 4, status: 'ready'},
            {banknote: 10, amount: 4, status: 'ready'}
        ]
    ) => {

        let showBanknoteOnScreen = {}

        // Сюда возвращаем полученный результат
        let result = []

        const currentBanknotes = []
        banknotes.map(el => currentBanknotes.push(
            {banknote: el.banknote, amount: el.amount, status: el.status}
        ))

        let currentAmount = amount
        let totalSum = 0

        // Получаем последнее число вводимой суммы
        let checkAmount = Number(String(amount).split('').pop());

        // Получаем общую сумму денег в банкомате
        // Для проверки наличия нужной суммы в банкомате
        banknotes.map((num) => {totalSum = totalSum + num.banknote * num.amount});

        // Проверка на корретный ввод суммы
        if (checkAmount != 0) {
            console.log('Введите корретную сумму')
            return false
        }
        // Проверка наличия запрашиваемой суммы
        else if (totalSum < amount) {
            console.log('В банкомате недостаточно денег', totalSum)
            alert(`В банкомате недостаточно денег — ${totalSum}$`)
            setGetCash('')
            return false
        } 
        // Вычислением нужных купюр для выдачи
        else {
            currentBanknotes.map((num, i) => {
                let amountBanknote = num.amount;
                while (currentAmount >= num.banknote) {

                    if (amountBanknote === 0) {
                        num.status = 'Неисправен'
                        break

                    } else {
                        currentAmount = currentAmount - num.banknote
                        result.push(num.banknote)
                        
                        amountBanknote = amountBanknote - 1

                        showBanknoteOnScreen[num.banknote] = num.amount - amountBanknote

                        amountBanknote === 0 ? num.status = 'Неисправен' : true
                    }
                }
                // Запись текущего кол-ва банкнот
                num.amount = amountBanknote
                // console.log(`Current amount of banknote ${num.banknote}--> `, num.amount)
            })
        }

        // Вот с этой проверкой немного застопорился. 
        // Тут нужно выдать ответ на случай, если в банкомате есть только банкнота в 500, а снимают 200
        // console.log(result)
        if (result.length === 0) {
            if (result != amount) {
                console.log('Нет таких банкнот')
                alert('Нет таких банкнот')
                console.log('Выходные данные --> ', banknotes)
                return result = 'Нехватает нужных банкнот. Выберите другую сумму'
            } else {
                result.join(', ')
                currentBanknotes.map((el, index) => {
                    stateBanknote[index].amount = el.amount
                    stateBanknote[index].status = el.status
                })
            }
        } else {
            result.reduce((a=0, b=0) => a + b) != amount ? 
            {
                one: console.log('Нет таких банкнот'), 
                three: console.log('Выходные данные --> ', banknotes), 
                two: result = 'Нехватает нужных банкнот. Выберите другую сумму', 
            }
            : {
                one: result.join(', '), 
                two: currentBanknotes.map((el, index) => {
                    stateBanknote.push([index].amount = el.amount)
                    stateBanknote.push([index].status = el.status)
                }), 
                // three: console.log('Выходные данные --> ', banknotes)
            }
        }
        // console.log('this result --> ', result)
        setTakeCash(showBanknoteOnScreen)

        // return result
        return showBanknoteOnScreen

    }
    // ---------------------------- Вычисление // ---------------------------- //
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
                                        : setGetCash(`Got: ${cash.target[0].value}$`)
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