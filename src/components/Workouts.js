import React from 'react'
import Workout from './Workout' 

const Workouts = (props) => {
    return (
        <div>
          {props.workouts.map(workout => 
          <div key={workout.id}><Workout workout={workout} /></div>)}
        </div>
    )
}

export default Workouts 