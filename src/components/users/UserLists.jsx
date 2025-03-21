import { useContext } from 'react';
import Spinner from '../layouts/Spinner';
import UserItem from "../users/UserItem";
import GithubContext from "../../context/github/GithubContext"

function UserLists() {
  const {users, loading, fetchUsers} = useContext(GithubContext)

  if(!loading){
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user}/>
        })}
      </div>
    )
  } else {
    return <Spinner/>
  }
}

export default UserLists;
