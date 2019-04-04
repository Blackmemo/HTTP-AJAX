import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css'

const Friend = props => {

const friend = props.friends.find(friend => {
    return `${friend.id}` 
});


const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(friend.id);
};
    return (
        <div className="friend">
            <h2>{props.friend.name}, {props.friend.age}</h2>
            <h4>{props.friend.email}</h4>

            <div className="buttons">
            <NavLink to='/update-friend'>Update</NavLink>
            <button className='deleteBtn' onClick={deleteFriend}>Delete</button>
            </div>
        </div>
    );
}

export default Friend;