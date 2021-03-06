import React from 'react';

const EditFriend = props => {
  return (
    <div>
      <input placeholder={props.friend.name} type="text" onChange={props.handleTextChange} name="name"  />
      <input placeholder={props.friend.age} type="text" onChange={props.handleTextChange} name="age"  />
      <input placeholder={props.friend.email} type="text" onChange={props.handleTextChange} name="email"  />
      <button onClick={props.handleEditFriend}>Confirm Changes</button>
    </div>
  );
}
 
export default EditFriend;