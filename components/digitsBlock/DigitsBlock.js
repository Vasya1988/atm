'use client'

import { useGlobalContext } from "@/app/Context/context"
import { useEffect, useState } from "react"

const digitsBlock = (props) => {

    const digitsBlock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Enter', 0, 'Cancel']

    const {data, setData, takeCash, setTakeCash, totalSumOfClick, setTotalSumOfClick, getMoney, getCash, setGetCash} = useGlobalContext();
    
    return (
        digitsBlock.map((e, keys) => 
            e === 'Enter'? 

                <button 
                    onClick={() => {
                        getMoney(totalSumOfClick)
                        console.log(getCash)
                        setGetCash(`Got: ${totalSumOfClick}$`)
                        setTotalSumOfClick('')
                    }}
                    key={keys}
                    className={props.classes} 
                    style={{backgroundColor: 'var(--greenButton)', color: '#fff', fontWeight: 'normal'}} 
                    data-digit={e} >
                        {e}
                </button>

            : e === 'Cancel'? 
            
                <button 
                    onClick={() => (setTotalSumOfClick(''), setGetCash(``))}
                    key={keys}
                    className={props.classes} 
                    style={{backgroundColor: '#efa43d', color: '#fff', fontWeight: 'normal'}} 
                    data-digit={e} >
                        {e}
                </button>

            : <button onClick={(ev) => {
                totalSumOfClick === 0
                    ? setTotalSumOfClick(ev.target.dataset.digit)
                    : setTotalSumOfClick(totalSumOfClick + ev.target.dataset.digit)

                }} 
                key={keys} 
                className={props.classes} 
                data-digit={e} >{e}</button>
        )
    )
}
export default digitsBlock;