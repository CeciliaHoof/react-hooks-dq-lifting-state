import React from "react";
import UserCard from "./UserCard";

function UserList({users, displayTweets}) {
  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => displayTweets(user)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
