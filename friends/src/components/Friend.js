import React from 'react';
import './Friend.css';

const Friend = props => {
  return (
    <div className="friendCard">
      <ul>
        Name: {props.friend.name}<br/>
        Age: {props.friend.age}<br/>
        Email: {props.friend.email}
      </ul>
    </div>
  );
}
 
export default Friend;