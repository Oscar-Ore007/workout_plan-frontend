export default function workoutReducer(state = {workouts: []}, action) {
    switch (action.type) {
        case 'FETCH_WORKOUTS':
            return {workouts: action.payload} 
        case 'ADD_WORKOUT':
            return {...state, workouts: [...state.workouts, action.payload]}
            default: 
                return state
    }
}