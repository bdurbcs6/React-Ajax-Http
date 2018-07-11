import React, { Component } from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';
import axios from 'axios';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
        name: '',
        age: '',
        email: ''
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

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  };

  handleAgeChange = e => {
    this.setState({ age: e.target.value })
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  };

  handleSubmitFriend = () => {
    const friend = {name: this.state.name, age: this.state.age, email: this.state.email }
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log("Oopsie", err)
      })
  };


  render() { 
    return (
      <div>
        <FriendForm
          submitFriend={this.handleSubmitFriend}
          handleNameChange={this.handleNameChange}
          handleAgeChange={this.handleAgeChange}
          handleEmailChange={this.handleEmailChange}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}/>
        {this.state.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
 
export default Friends;