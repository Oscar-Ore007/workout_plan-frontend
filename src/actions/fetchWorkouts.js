

export function fetchWorkouts(action) {

    return (dispatch) => {
        // console.log('inside fetch workouts')
    fetch('http://localhost:3000/api/v1/workouts')
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'FETCH_WORKOUTS',
        payload: data
    }))
    }
}
