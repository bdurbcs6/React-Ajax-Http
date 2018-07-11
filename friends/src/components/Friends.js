import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(error => {
        console.log("Danger Will Robinson", error);
      });
  }
  render() { 
    return (
      <div>
        {this.state.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
 
export default Friends;