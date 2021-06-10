import React from 'react';


const Workout = (props) => {


let workout = props.workouts[props.match.params.id - 1]
    return (
        <li>
            {workout ? workout.name : null} -          {workout ? workout.duration : null}
        </li>
    )

}

export default Workout 