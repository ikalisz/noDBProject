import React from 'react'
import '../App.css'


export default function Button (props) {
    return (
        <button className="submitButton"
        onClick={() => props.fn()}
        >Submit!</button>
    )
}