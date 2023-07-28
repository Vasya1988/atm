import classes from './CashButton.module.sass'

const CashButton = ({sum, dataName, clickHandle}) => {
    return (
        <div onClick={clickHandle} data-cash={dataName} className={classes.CashButton} >
            <p>{sum}</p>
        </div>
    )
}
export default CashButton