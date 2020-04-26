import React from 'react';
import "./header.css"






const Header = () => {
    return (
        <div className="header d-flex">

            <h3>
                <a href="#">Star Wars</a>
            </h3>
            <ul className='d-flex'>
                <li><a href="/itemlist">People</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="/starShipsItemList">Starships</a></li>
            </ul>
        </div>
    )
};

export default Header;
