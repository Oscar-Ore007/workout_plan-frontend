

export function fetchWorkouts() {

    return (dispatch) => {
    
    console.log('inside fetch account')
    fetch('http://localhost:3000/api/v1/workouts')
    .then(resp => resp.json())
    .then(workouts => dispatch({
        type: 'FETCH_WORKOUTS',
        payload: workouts 
    }))
    }
    
}
