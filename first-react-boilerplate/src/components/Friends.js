import React from 'react'
import Card from './Card'
import User from './User'

const Friends = () => {

    return <div className="row">

        <Card name="German" age="32" city="Madrid">
            <p>Nacido en Salamanca en 1986</p>
            <hr />
            <p>Y sus amigos son...</p>
            <User name="María" age="32" />
        </Card>

        <Card name="María" age="31" city="Madrid">
            <p>Le encanta el front</p>
            <hr />
            <p>Y sus amigos son...</p>
            <User name="Germán" age="32" />
        </Card>

        <Card name="Alex" age="30" city="Valencia">
            <p>Le encanta hacer el travieso</p>
            <hr />
            <p>Y sus amigos son...</p>
            <User name="María" age="32" />
        </Card>

    </div>
}

export default Friends