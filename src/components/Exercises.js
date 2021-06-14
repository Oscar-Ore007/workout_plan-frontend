import React from 'react' 

const Exercises = (props) => {
    return( 
        <div>
            {props.exercises && props.exercises.map(exercise =>
                <li key={exercise.id}>{exercise.reps} - {exercise.sets} - {exercise.date} - {exercise.description} </li>

                )}
        </div>
    )
}

export default Exercises 