export const addWorkout = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/workouts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(workout => dispatch({type: 'ADD_WORKOUT', payload: workout}))
    }

    
}