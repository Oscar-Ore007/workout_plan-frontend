import React, { useState } from 'react';
import ExercisesContainer from '../containers/ExercisesContainer';
import WorkoutEdit from './WorkoutEdit';


const Workout = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

    const endEditing = () => {
        setIsEditing(false)
    }


let workout = props.workouts.filter(workout => workout.id == props.match.params.id)[0]

    return (
    <React.Fragment>
        <div className="workout">
            {workout ? <h2>{workout.name}</h2> : null}
            <br></br>
            <h3>Edit Workout</h3>
            <button onClick={() => handleEditClick(workout)}>EDIT</button> 
        </div>
       <div>
            { isEditing && <WorkoutEdit workout={workout} endEditing={endEditing}/>}
            <ExercisesContainer workout={workout}/> 
        </div> 
</React.Fragment>
    )

}

export default Workout 