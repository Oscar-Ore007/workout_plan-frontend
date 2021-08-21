export const editExercise = (exercise) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/exercises/${exercise.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(exercise)
        })
        .then(resp => resp.json())
        .then(exercise => dispatch({
            type: 'EDIT_EXERCISE',
            payload: exercise
        }))
    }
}