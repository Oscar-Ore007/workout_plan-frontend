import React from 'react'
import {Link} from 'react-router-dom';


const Workouts = (props) => {
    return (
        <div>
            <h3>Your Workouts</h3>
          {props.workouts.map(workout => 
          <div key={workout.id} className="workout-card">
            <Link to={`/workouts/${workout.id}`}>{workout.name}</Link> 
            </div>)}
        </div>
    )
}

export default Workouts 