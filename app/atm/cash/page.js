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

    const [stateBanknote, setStateBanknote] = useState([])
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
        banknotes.map((num) => {totalSum = totalSum + num.banknote * num.amount});

        // Проверка на корретный ввод суммы
        if (checkAmount != 0) {
            console.log('Введите корретную сумму')
            return false
        }
        // Проверка наличия запрашиваемой суммы
        else if (totalSum < amount) {
            console.log('В банкомате недостаточно денег', totalSum)
            return 'В банкомате недостаточно денег'
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
        console.log(result)
        if (result.length === 0) {
            if (result != amount) {
                console.log('Нет таких банкнот')
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
                three: console.log('Выходные данные --> ', banknotes)
            }
        }

        return result

    }
    // ---------------------------- Вычисление // ---------------------------- //
    console.log(getMoney(450))

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