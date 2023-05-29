import classes from './Atm.module.sass'

const Atm = () => {
    return (
        <div className={classes.Atm} >
            <div className={classes.atmScreen}></div>
            <div className={classes.digits}>
                <button className={classes.digit}>1</button>
                <button className={classes.digit}>2</button>
                <button className={classes.digit}>3</button>
                <button className={classes.digit}>4</button>
                <button className={classes.digit}>5</button>
                <button className={classes.digit}>6</button>
                <button className={classes.digit}>7</button>
                <button className={classes.digit}>8</button>
                <button className={classes.digit}>9</button>
                <button className={classes.digit} style={{backgroundColor: 'var(--greenButton)'}}>Enter</button>
                <button className={classes.digit}>0</button>
                <button style={{backgroundColor: 'var(--orange)'}} className={classes.digit}>Cancel</button>
                <div className={classes.moneyOut} ></div>
            </div>
        </div>
    )
}

export default Atm