import React from 'react';
import EditFriend from './EditFriend';
import axios from 'axios';
import './Friend.css';

class Friend extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false, 
      name: '',
      age: '',
      email: ''
    };
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  };

  editFriendHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleEditFriend = () => {
    const editFriend = {name: this.state.name, age: this.state.age, email: this.state.email }
    axios
      .put(`http://localhost:5000/friends/${this.props.friend.id}`, editFriend)
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data})
      })
      .catch(err => {
        console.log("error", err)
      })
  };

  render() {
    return (
      <div className="friendCard">
          Name: {this.props.friend.name}<br/><br/>
          Age: {this.props.friend.age}<br/><br/>
          Email: {this.props.friend.email}
          <button onClick={() => this.props.handleDeleteFriend(this.props.friend.id)}>Delete Friend!</button>
          {this.state.showForm ? (
            <EditFriend friend={this.props.friend} handleEditFriend={this.handleEditFriend} handleTextChange={this.props.handleTextChange} />
          ) : null}
          <button onClick={this.toggleForm}>Edit Friend</button>
      </div>
    );
  }
}
 
export default Friend;