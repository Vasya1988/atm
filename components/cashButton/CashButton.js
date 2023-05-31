import classes from './CashButton.module.sass'

const CashButton = ({sum}) => {
    return (
        <div className={classes.CashButton} >
            <p>{sum}</p>
        </div>
    )
}
export default CashButton