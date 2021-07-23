export const addExercise = (exercise, workoutId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/workouts/${workoutId}/exercises`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(exercise)
        })
        .then(response => response.json())
        .then(workout => {
            if (workout.error) {
                alert(workout.error)
            } else {
            dispatch({type: 'ADD_EXERCISE', payload: workout})
                }
            }
        )
    }
}