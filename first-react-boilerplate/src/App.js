import React, { Component } from "react";
import "./App.css";

import ClassComponent from './components/ClassComp'
import FunctionComponent from './components/FunctionComp'

/* --- Custom components --- */
import Header from './components/Header'
import User from './components/User'
import FriendsList from './components/Friends'

/* --- NPM components --- */
import Player from 'react-player'


class App extends Component {

  render() {

    return (
      <main>
        <div className="container">

          <h1>Mi aplicación de React</h1>

          <section>
            <Header
              title="Tipos de componentes"
              subtitle="Hay dos tipos de componentes"
            />
            <ClassComponent />
            <FunctionComponent />
          </section>

          <section>
            <Header
              title="Lista de usuarios"
              subtitle="Reciben la información como props"
            />
            <User name="Germán" age="33" />
            <User name="María" age="32" />
          </section>

          <section>
            <Header title="Componente prefabricado de NPM" />
            <Player url="https://vimeo.com/channels/top/22439234" playing="true" />
          </section>

          <section>
            <Header title="Lista de personas (mejor)" />
            <FriendsList />
          </section>

        </div>
      </main>
    )
  }
}

export default App;