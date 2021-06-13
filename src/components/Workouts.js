import React from 'react'
import {Route, Link} from 'react-router-dom'
import Workout from './Workout' 

const Workouts = (props) => {
    return (
        <div>
          {props.workouts.map(workout => 
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>{workout.name}</Link> 
            </li>)}
        </div>
    )
}

export default Workouts 