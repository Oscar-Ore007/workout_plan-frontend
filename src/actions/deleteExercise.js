export const deleteExercise = (exerciseId, workoutId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/workouts/${workoutId}/exercises/${exerciseId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(workout => dispatch({type: 'DELETE_EXERCISE', payload: workout}))
    }
}

