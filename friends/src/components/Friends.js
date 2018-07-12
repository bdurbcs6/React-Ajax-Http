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

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  // handleAgeChange = e => {
  //   this.setState({ age: e.target.value })
  // };

  // handleEmailChange = e => {
  //   this.setState({ email: e.target.value })
  // };

  handleSubmitFriend = () => {
    const friend = {name: this.state.name, age: Number(this.state.age), email: this.state.email }
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log("Oopsie", err)
      })
      this.setState({ name: '', age: '', email: ''})
  };

  handleDeleteFriend = id => {
      axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log("you messed up", err)
      })
  };

  handleEditFriend = () => {
    axios
      .put(`http://localhost:5000/friends/${this.state.friends.id}`)
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => {
        console.log("error", err)
      })
  };


  render() { 
    return (
      <div>
        <FriendForm
          submitFriend={this.handleSubmitFriend}
          handleTextChange={this.handleTextChange}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}/>
        {this.state.friends.map(friend => (
          <Friend key={friend.id} friend={friend} handleDeleteFriend={this.handleDeleteFriend} handleEditFriend={this.handleEditFriend} />
        ))}
      </div>
    );
  }
}
 
export default Friends;