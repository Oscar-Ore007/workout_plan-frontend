import React from 'react';
import {Redirect} from 'react-router-dom'
import WorkoutEdit from './WorkoutEdit'

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
            <ExercisesContainer workout={workout}/> <br/> 
            <h3>Edit Workout</h3>
            <WorkoutEdit workout={workout}/> 
        </div>
    )

}

export default Workout 