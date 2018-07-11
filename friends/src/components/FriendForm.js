import React from 'react';

const FriendForm = props => {
  return (
    <div>
      <input type="text" placeholder="Enter Name" onChange={props.handleNameChange} value={props.name}/>
      <input type="text" placeholder="Enter Age" onChange={props.handleAgeChange} value={props.age}/>
      <input type="text" placeholder="Enter Email" onChange={props.handleEmailChange} value={props.email}/>
      <button onClick={props.submitFriend}>Submit!</button>
    </div>
  );
}
 
export default FriendForm;