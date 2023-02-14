import PropTypes from 'prop-types';
// import css from 'components/Transactions/Transactions.module.css';
import { TableSlyle } from './Transactions.styled';

export const TransactionsHistory = ({items}) => {
    return ( 
    <TableSlyle>
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
</TableSlyle>
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