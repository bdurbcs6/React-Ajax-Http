import React from 'react';
import './Friend.css';

const Friend = props => {
  return (
    <div className="friendCard">
        Name: {props.friend.name}<br/><br/>
        Age: {props.friend.age}<br/><br/>
        Email: {props.friend.email}
        <button onClick={() => props.handleDeleteFriend(props.friend.id)}>Delete Friend!</button>
    </div>
  );
}
 
export default Friend;