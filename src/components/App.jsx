import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friendlist/Friendlist';
import { TransactionsHistory } from 'components/Transactions/Transactions';
import user from 'user.json'; 
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <Profile 
      key={user.username}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics 
      title="Upload stats"
      stats={data}
      />

      <FriendList
      friends={friends}
      /> 
      <TransactionsHistory items={transactions} />
    </div>
  );
};
