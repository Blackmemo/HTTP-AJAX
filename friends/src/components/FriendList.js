import React, { Component } from 'react';
import Friend from './Friend';

const FriendList = props => {
    return(
        <div className="list">
            {props.friends.map(friend => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </div>
    );
}

export default FriendList;