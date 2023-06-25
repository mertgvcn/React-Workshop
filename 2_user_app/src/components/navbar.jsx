import React from 'react'
import './navbar.css'

function navbar(props) {
    return (
        <div id="navbar-wrapper">
            <h2>{props.title}</h2>
        </div>
    )
}

export default navbar
