import React from 'react';
import EditFriend from './EditFriend';
import './Friend.css';

class Friend extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    return (
      <div className="friendCard">
          Name: {this.props.friend.name}<br/><br/>
          Age: {this.props.friend.age}<br/><br/>
          Email: {this.props.friend.email}
          <button onClick={() => this.props.handleDeleteFriend(this.props.friend.id)}>Delete Friend!</button>
          {this.state.showForm ? (
            <EditFriend friend={this.props.friend} handleEditFriend={this.props.handleEditFriend} handleTextChange={this.props.handleTextChange} />
          ) : null}
          <button onClick={this.toggleForm}>Edit Friend</button>
      </div>
    );
  }
}
 
export default Friend;