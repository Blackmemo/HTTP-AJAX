import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';


class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    };
  }

componentDidMount() {
  axios
  .get('http://localhost:5000/friends')
  .then(res => {
    this.setState({ friends: res.data });
  })
  .catch(err => {
    console.log(err); 
  });
}

addFriend = newFriend => {
  axios
  .post('http://localhost:5000/friends', newFriend)
  .then(res => {
    this.setState({ friends: res.data });
    this.props.history.push('/');
  })
  .catch(err => {
    console.log(err);
  });
};

deleteFriend = id => {
  axios
  .delete(`http://localhost:5000/friends/${id}`)
  .then(res => {
    this.setState({ friends: res.data });
    this.props.history.push('/');
  })
  .catch(err => {
    console.log(err);
  });
}

updateFriend = (id, updatedInfo) => {
  axios
  .put(`http://localhost:5000/friends/${id}`, updatedInfo )
  .then(res => {
    this.setState({ friends: res.data});
    this.props.history.push('/');
  })
  .catch(err => {
    console.log(err);
  });
};



  render() {
    return (
      <div className="App">
      <h1>Friends:</h1>
      <div className='linksCon'>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to="/new-friend">Add a Friend</NavLink>
      </div>
      <Route exact path='/' render={() => <FriendList deleteFriend={this.deleteFriend}  friends={this.state.friends} />} />
      <Route path='/new-friend' render={props => <AddForm {...props} addFriend={this.addFriend} /> } />
      <Route path='/update-friend' render={props => <UpdateForm friends={this.state.friends} updateFriend={this.updateFriend} />} />
      </div>
    );
  }
}

export default App;