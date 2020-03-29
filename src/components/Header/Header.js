import React from 'react'
import logo from '../../images/GitHub-Mark-Light-120px-plus.png'
import './Header.css'


// eslint-disable-next-line react/prop-types
const Header = () => (
    <header className="App-header">
        <img className="App-logo" src={ logo } alt="logo"/>
        <h1>
          My Github Portfolio
        </h1>
    </header>
);

export default Header;