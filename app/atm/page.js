
const Atm = ( {children}) => {

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
        const currentBanknotes = []
        banknotes.map(el => currentBanknotes.push(
            {banknote: el.banknote, amount: el.amount, status: el.status}
        ))
    }

    
    return (
        <main>{children}</main>
    )
}

export default Atm