import classes from './Atm.module.sass'
import Title from '@/components/title/Title'
import Link from 'next/link'
import Navigation from '@/components/navigation/Navigation'

const NavItems = [
    {label: 'Cash', href: '/atm/main/'},
    {label: 'Setup', href: '/atm/setup/'},
    {label: 'Back', href: '/'}
]

const AtmLayout = ({children}) => {
    return (
        <div className={classes.Atm} >
            <div className={classes.atmScreen}>
                <Navigation navLinks={NavItems}/>
                {/* <nav className={classes.Navigate}>
                    <Link href={'/atm/main'}>cash</Link>
                    <Link href={'/atm/setup'}>setup</Link>
                    <Link href={'/'}>back</Link>
                </nav> */}
                <Title tag='h2' text='Cash' />
                <main>{children}</main>
            </div>
            <div className={classes.digits}>
                <button className={classes.digit} data-digit='1' >1</button>
                <button className={classes.digit} data-digit='2' >2</button>
                <button className={classes.digit} data-digit='3' >3</button>
                <button className={classes.digit} data-digit='4' >4</button>
                <button className={classes.digit} data-digit='5' >5</button>
                <button className={classes.digit} data-digit='6' >6</button>
                <button className={classes.digit} data-digit='7' >7</button>
                <button className={classes.digit} data-digit='8' >8</button>
                <button className={classes.digit} data-digit='9' >9</button>
                <button className={classes.digit} data-enter='enter' style={{backgroundColor: 'var(--greenButton)', color: '#fff', fontWeight: 'normal'}}>Enter</button>
                <button className={classes.digit} data-digit='0' >0</button>
                <button style={{backgroundColor: '#efa43d', color: '#fff', fontWeight: 'normal'}} className={classes.digit} data-cancel='cancel' >Cancel</button>
                <div className={classes.moneyOut} ></div>
            </div>
        </div>
    )
}

export default AtmLayout