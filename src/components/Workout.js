import React from 'react';
import {Redirect} from 'react-router-dom'
import ExercisesContainer from '../containers/ExercisesContainer'



const Workout = (props) => {

    console.log(props)


let workout = props.workouts[props.match.params.id - 1]
console.log(workout)
    return (
        <div>
        <h2>
            {workout ? workout.name : null} - {workout ? workout.duration : null}
        </h2>
        <ExercisesContainer workout={workout}/> 
        </div>
    )

}

export default Workout 