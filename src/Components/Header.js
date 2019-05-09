import React from 'react'
import '../App.css'
export default function Header() {
    return (
        <header className="header spaceBetween">
            <h3 className="home">
                Home
            </h3>
            <h2 className="titleText">
                Picasso's Character Creater
            </h2>
            <div className="postAboutHeader spaceBetween">
                <h3>Posts</h3>
                <h3>About</h3>
            </div>
        </header>
    )
}