import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from 'user.json'; 
import data from 'data.json';

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
      key={data.id}
      title="Upload stats"
      stats={data}
      label={data.label}
      percentage={data.percentage}
      />
    </div>
  );
};
