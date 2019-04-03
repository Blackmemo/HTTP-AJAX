import React, { Component } from 'react';

const Friend = props => {
    return (
        <div>
            <h2>{props.friend.name}, {props.friend.age}</h2>
            <p>{props.friend.email}</p>
        </div>
    );
}

export default Friend;