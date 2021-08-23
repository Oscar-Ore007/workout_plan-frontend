export const deleteExercise = (exerciseId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/exercises/${exerciseId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(workout => dispatch({type: 'DELETE_EXERCISE', payload: workout}))
    }
}

