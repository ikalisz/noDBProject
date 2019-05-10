import React from 'react'
import '../App.css'
import UsernameDisplay from './UsernameAlert'
export default function Header(props) {
    return (
        <header className="header spaceBetween">
            <h3 className="home">
                Home
            </h3>
            <h2 className="titleText">
                Picasso's Character Creater
            </h2>
            <UsernameDisplay username={props.username}/>
            <div className="postAboutHeader spaceBetween">
                <h3>Posts</h3>
                <h3>About</h3>
            </div>
        </header>
    )
}