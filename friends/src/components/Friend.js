import React, { Component } from 'react';

const Friend = props => {
    return (
        <div className="friend">
            <h2>{props.friend.name}, {props.friend.age}</h2>
            <h4>{props.friend.email}</h4>
        </div>
    );
}

export default Friend;