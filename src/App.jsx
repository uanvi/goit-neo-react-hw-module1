import FriendList from './components/FriendList/FriendList';
import Profile from "./components/Profile/Profile";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;