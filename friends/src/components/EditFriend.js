import React from 'react';

const EditFriend = props => {
  return (
    <div>
      <input placeholder={props.friend.name} type="text" onChange={props.editFriendHandler} name="name" value={props.name} />
      <input placeholder={props.friend.age} type="text" onChange={props.editFriendHandler} name="age" value={props.age} />
      <input placeholder={props.friend.email} type="text" onChange={props.editFriendHandler} name="email" value={props.email} />
      <button onClick={props.handleEditFriend}>Confirm Changes</button>
    </div>
  );
}
 
export default EditFriend;