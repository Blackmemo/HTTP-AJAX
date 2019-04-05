import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

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
        this.props.addFriend(this.state.friend);

        this.setState({
            item: {
            name: '',
            age: '',
            email: ''
            }
        });
    };

    render() {
        return (
            <div>
                <h2>Add a friend!</h2>
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

          <button>Add Friend</button>
                </form>
            </div>
        );
    }

}

export default AddForm;