import React from 'react' ;
import {Link, NavLink} from 'react-router-dom'

const NavBar = (props) => {

    return (
    <nav className="topnav">
        <div className="container">
            <Link to='/'>HOME</Link>
            <NavLink to='/workouts'> WORKOUTS </NavLink>
            <NavLink to='/workouts/new'> ADD A WORKOUT </NavLink>
        </div>
    </nav>
    )
}

export default NavBar 