import React from 'react';
import Menu from "./Menu/Menu";


const NavBar = props => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Menu/>
    </nav>
};

export default NavBar;