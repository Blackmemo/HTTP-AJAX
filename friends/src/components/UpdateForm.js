import React, { Component } from 'react';

class UpdateForm extends Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

    friend = this.props.friends.find(friend => {
        return `${friend.id}` 
    });

    handleChanges = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'age') {
            value = parseInt(value, 10);
        }

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value
            }
        }));
    };

     SubmitFriend = e => {
        e.preventDefault();
        this.props.updateFriend(this.friend.id, this.state.friend);
    };

    render() {
        return (
            <div>
                <h2>Update friend</h2>
                <form onSubmit={this.SubmitFriend}>
                <input
                type="text"
                name="name"
                onChange={this.handleChanges}
                placeholder="Name"
                value={this.state.friend.name}
                />
                <div className='baseline' />

            <input
            type="number"
            name="age"
            onChange={this.handleChanges}
            placeholder="Age"
            value={this.state.friend.age}
          />
          <div className="baseline" />

          <input
            type="string"
            name="email"
            onChange={this.handleChanges}
            placeholder="Email"
            value={this.state.friend.email}
          />
          <div className="baseline" />

          <button onClick={this.SubmitFriend}>Edit Friend</button>
                </form>
            </div>
        );
    }

}

export default UpdateForm;