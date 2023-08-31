'use client'
import classes from './Atm.module.sass'
import Navigation from '@/components/navigation/Navigation'
import DigitsBlock from '@/components/digitsBlock/DigitsBlock'

const NavItems = [
    {label: 'Cash', href: '/atm/cash'},
    {label: 'Setup', href: '/atm/setup'},
    {label: 'Back', href: './'}
]

const AtmLayout = ({children}) => {

    return (
        <div className={classes.Atm} >
            <div className={classes.atmScreen}>
                <Navigation navLinks={NavItems}/>
                <main>{children}</main>
            </div>
            <div className={classes.digits}>
                {
                    <DigitsBlock classes={classes.digit}/>
                }
                <div className={classes.moneyOut} ></div>
            </div>
        </div>
    )
}

export default AtmLayout