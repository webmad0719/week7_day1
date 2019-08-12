import React from 'react'
import '../styles/card-person.css'

const Card = props => {

    return (
        <div className="col-md-4 card-person">
            <header>
                <h4>{props.name}</h4>
                <small>{props.age}, {props.city}</small>
                {props.children} {/* <== props.children son los hijos del componente */}
            </header>
        </div>
    )
}

export default Card