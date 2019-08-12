import React from 'react'

const Header = props => {

    return (
        <header>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </header>
    )
}

export default Header