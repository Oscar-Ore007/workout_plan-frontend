import React from 'react';
import ExerciseEdit from './ExerciseEdit';

const Exercise = (props) => {
    return (
        <div>
            <ExerciseEdit exercise={props.exercise}/>
        </div>
    )
}
export default Exercise 