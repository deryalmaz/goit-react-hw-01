import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import { IoLogoReact } from "react-icons/io5";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
const App = () => {
  return (
    <>

       <div style={{ display: "flex", justifyContent: "center" }}>
      <IoLogoReact size={70} />
    </div>

      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <div style={{ display: "flex", justifyContent: "center" }}>
      <IoLogoReact size={70} />
    </div>
    </>
  );
};

export default App;
