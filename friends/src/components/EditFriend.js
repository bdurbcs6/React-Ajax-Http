import React from 'react';

const EditFriend = props => {
  return (
    <div>
      <input placeholder={props.friend.name} type="text" onChange={props.handleTextChange} />
      <input placeholder={props.friend.age} type="text" onChange={props.handleTextChange} />
      <input placeholder={props.friend.email} type="text" onChange={props.handleTextChange} />
    </div>
  );
}
 
export default EditFriend;