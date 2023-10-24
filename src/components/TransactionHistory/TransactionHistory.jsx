import './TransactionHistory.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className="transactionHistory">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(items => (
                <tr key={items.id}>
                    <td>{items.type}</td>
                    <td>{items.amount}</td>
                    <td>{items.currency}</td>
                </tr>
            ))                   
            }                             
        </tbody>
        </table>        
    )
}