import React from 'react';

const Friend = props => {
  return (
    <div>
      <ul>
        Name: {props.friend.name}<br/>
        Age: {props.friend.age}<br/>
        Email: {props.friend.email}
      </ul>
    </div>
  );
}
 
export default Friend;