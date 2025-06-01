import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th className={styles.headerCell}>Type</th>
                    <th className={styles.headerCell}>Amount</th>
                    <th className={styles.headerCell}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }, index) => (
                    <tr key={id} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                        <td className={`${styles.cell} ${styles.transactionType}`}>{type}</td>
                        <td className={styles.cell}>{amount}</td>
                        <td className={styles.cell}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default TransactionHistory;