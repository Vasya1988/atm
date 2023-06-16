import classes from './CashButton.module.sass'

const CashButton = ({sum, dataName}) => {
    return (
        <div data-cash={dataName} className={classes.CashButton} >
            <p>{sum}</p>
        </div>
    )
}
export default CashButton