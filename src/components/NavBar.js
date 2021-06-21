import React from 'react' 
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div>
            <Link to='/workouts' style={{paddingRight: '10px'}}> Workouts </Link>
            <Link to='/workouts/new'> Add Workout </Link>
        </div>
    )
}

export default NavBar 