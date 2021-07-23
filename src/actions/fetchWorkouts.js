

export function fetchWorkouts() {

    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/workouts')
    .then(resp => resp.json())
    .then(workouts => dispatch({
        type: 'FETCH_WORKOUTS',
        payload: workouts 
    }))
    }
}
