import classes from './Atm.module.sass'
import Navigation from '@/components/navigation/Navigation'

const NavItems = [
    {label: 'Cash', href: '/atm/cash'},
    {label: 'Setup', href: '/atm/setup'},
    {label: 'Back', href: '/'}
]

const digitsBlock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Enter', 0, 'Cancel']

const AtmLayout = ({children}) => {
    return (
        <div className={classes.Atm} >
            <div className={classes.atmScreen}>
                <Navigation navLinks={NavItems}/>
                <main>{children}</main>
            </div>
            <div className={classes.digits}>
                {
                    digitsBlock.map(e => 
                        e === 'Enter'? 

                            <button className={classes.digit} style={{backgroundColor: 'var(--greenButton)', color: '#fff', fontWeight: 'normal'}} data-digit={e} >{e}</button>

                        : e === 'Cancel'? 
                        
                            <button className={classes.digit} style={{backgroundColor: '#efa43d', color: '#fff', fontWeight: 'normal'}} data-digit={e} >{e}</button>

                        : <button className={classes.digit} data-digit={e} >{e}</button>
                    )
                }
                <div className={classes.moneyOut} ></div>
            </div>
        </div>
    )
}

export default AtmLayout