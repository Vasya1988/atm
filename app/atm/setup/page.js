'use client'
import { useGlobalContext } from "@/app/Context/context"
import classes from './SettingsScreen.module.sass'
import Title from "@/components/title/Title"
import { useState } from "react"

const Setup = (props) => {

    const { buttonSumValue, stateBanknote, setStateBanknote } = useGlobalContext()

    const [sum, setSum] = useState(null)
    console.log(sum)
    console.log(stateBanknote)
    return (
        <div className={classes.Setup}>
            <Title text='Setup' />
            <div className={classes.SetupOptions}>
                {buttonSumValue.map((e, item) => {
                    return e !== 'Settings' && e !== 'Other sum' 
                        ? <div key={item} className={classes.Number}>
                            <span>{e}: 0</span>
                            <input onChange={(digit) => setSum(
                                {
                                    banknote: Number(e.replace('$', '')), 
                                    amount: Number(digit.target.value), 
                                    status: 'Исправен'
                                })} placeholder="Enter" type="text"></input>
                            <button
                                onClick={(e) => {
                                    setStateBanknote([...stateBanknote, sum])
                                }}
                            >
                                Add
                            </button>
                        </div>
                        : ''
                })}
            </div>
        </div>
        
    )
}
export default Setup