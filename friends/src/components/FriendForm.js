import React from 'react';

const FriendForm = props => {
  return (
    <div>
      <input type="text" placeholder="Enter Name" onChange={props.handleTextChange} name="name" value={props.name}/>
      <input type="text" placeholder="Enter Age" onChange={props.handleTextChange} name="age" value={props.age}/>
      <input type="text" placeholder="Enter Email" onChange={props.handleTextChange} name="email" value={props.email}/>
      <button onClick={props.submitFriend}>Submit!</button>
    </div>
  );
}
 
export default FriendForm;