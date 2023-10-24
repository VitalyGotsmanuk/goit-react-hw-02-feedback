import user from '../data/user.json';
import { Profile } from './Profile/Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import '../index.css';

export const App = () => {
  return (
    <section>
    {/* <h1>1-st HW!</h1> */}
    
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
        
    <Statistics title="Upload stats" stats={data} />
      
    <Statistics stats={data} />
    
    <FriendList friends={friends} /> 
    
    <TransactionHistory items={transactions} />
             
    </section> 
  );
};
