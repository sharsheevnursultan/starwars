import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="https://swapi.dev"
                   rel="noopener noreferrer"
                   target='_blank'>Star Wars</a>
            </h3>
            <ul className='d-flex'>
                <a href="/peoples">
                    <li>People</li>
                </a>
                <a href="/planets">
                    <li>Planets</li>
                </a>
                <a href="/starShipsItemList">
                    <li>StarShips</li>
                </a>
            </ul>
        </div>
    )
};

export default Header;
