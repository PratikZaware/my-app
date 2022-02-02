import React from 'react'

export default function Navbar(props)
{
    return(
        <nav>
            <li>{props.title}</li>
            <li>{props.about}</li>
        </nav>
    )
}