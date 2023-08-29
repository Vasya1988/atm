'use client'

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(
    {
        data: '',
        setData: useState,
        takeCash: null, 
        setTakeCash: useState,
        totalSumOfClick: 0,
        setTotalSumOfClick: useState,
        stateBanknote: null,
        setStateBanknote: useState
    }
);

export const GlobalContextProvider = ({children}) => {

    const [data, setData] = useState()
    const [takeCash, setTakeCash] = useState()
    const [tapPadSum, setTapPadSum] = useState()
    const [totalSumOfClick, setTotalSumOfClick] = useState(0)
    const [getCash, setGetCash] = useState('')
    const test = () => {
        console.log('it`s work!')
    }
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


    return (
        <GlobalContext.Provider value={{data, setData, takeCash, setTakeCash, totalSumOfClick, setTotalSumOfClick, getCash, setGetCash, getMoney}} >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)