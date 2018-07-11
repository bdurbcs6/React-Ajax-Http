import React from 'react';
import './Friend.css';

const Friend = props => {
  return (
    <div className="friendCard">
      
        Name: {props.friend.name}<br/><br/>
        Age: {props.friend.age}<br/><br/>
        Email: {props.friend.email}
      
    </div>
  );
}
 
export default Friend;