import React from 'react'
import '../App.css'
import UsernameDisplay from './UsernameAlert'
import Help from './Help'
export default function Header(props) {
    return (
        <header className="header spaceBetween">
            <h3 className="home">
                Home
            </h3>
            <h2 className="titleText">
                Picasso's Character Creator
            </h2>
            <UsernameDisplay username={props.username}/>
            <div className="postAboutHeader spaceBetween">
                <h3>About</h3>
                <Help />
            </div>
        </header>
    )
}