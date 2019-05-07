import React from 'react'
import '../App.css'
export default function Header() {
    return (
        <header className="header spaceBetween">
            <h3 className="home">
                iHome
            </h3>
            <div className="postAboutHeader spaceBetween">
                <h3>Posts</h3>
                <h3>About</h3>
            </div>
        </header>
    )
}