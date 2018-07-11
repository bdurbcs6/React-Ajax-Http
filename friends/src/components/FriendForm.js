import React from 'react';

const FriendForm = props => {
  return (
    <div>
      <input type="text" placeholder="Enter Name" value={props.name} />
      <input type="text" placeholder="Enter Age" value={props.age} />
      <input type="text" placeholder="Enter Email" value={props.email} />
      <button onClick={props.submitFriend}>Submit!</button>
    </div>
  );
}
 
export default FriendForm;