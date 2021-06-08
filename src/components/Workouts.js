import React from 'react'

const Workouts = (props) => {
    return (
        <div>
          {props.workouts.map(workout => <li key={workout.id}>{workout.name} - {workout.duration}</li>)}
        </div>
    )
}

export default Workouts 