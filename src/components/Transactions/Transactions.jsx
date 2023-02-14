import PropTypes from 'prop-types';
import css from 'components/Transactions/Transactions.module.css';

export const TransactionsHistory = ({items}) => {
    return (
        <table className={css["transaction-history"]}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    {items.map(({id, type, amount, currency}) => 
    <tbody key={id}>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr> 
  </tbody>
  )}
</table>
    )
};

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired).isRequired
}