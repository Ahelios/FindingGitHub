import UserLists from "../components/users/UserLists";
import UserSearch from "../components/users/UserSearch";


function Home() {
  return (
    <div>
      <UserSearch/>
      <UserLists/>
    </div>
  )

}

export default Home;
