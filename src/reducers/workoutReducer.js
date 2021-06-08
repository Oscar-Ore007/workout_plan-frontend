export default function workoutReducer(state = {workouts: []}, action) {
    switch (action.type) {
        case 'FETCH_WORKOUTS':
            return {workouts: action.payload} 
            default: 
                return state
    }
}