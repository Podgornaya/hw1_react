
import './theme/App.css';
import './components/Profile/profile.css';
import './components/Friends/friendList.css';

import userInf from './user.json';
import { Profile } from './components/Profile';
import friends from './friends.json';
import { FriendList } from './components/Friends'
//import { FriendList } from './components/FriendList';

function App() {
  return (
    <>
    <Profile users={userInf}/>
    <FriendList friends={friends} />
    </>
  );
}

export default App;