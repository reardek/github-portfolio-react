import React from 'react'
import Link from '../Link/Link'
import './Header.css'


// eslint-disable-next-line react/prop-types
const Header = ({ logo }) => (
    <header className="App-header">
        <img className="App-logo" src={ logo } alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link url='https://reactjs.org' title='Learn React' />
    </header>
);

export default Header;