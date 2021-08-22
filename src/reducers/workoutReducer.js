export default function workoutReducer(state = {workouts: []}, action) {
    switch (action.type) {
      case 'FETCH_WORKOUTS':
        return {workouts: action.payload}
      case 'ADD_WORKOUT':
        return {...state, workouts: [...state.workouts, action.payload]}
      case 'ADD_EXERCISE':
        let workouts = state.workouts.map(workout => {
          if (workout.id === action.payload.id) {
            return action.payload
          } else {
            return workout
          }
        })
        return {...state, workouts: workouts}
      case 'DELETE_EXERCISE':
        let workoutsTwo = state.workouts.map(workout => {
          if (workout.id === action.payload.id) {
            return action.payload
          } else {
            return workout
          }
        })
        return {...state, workouts: workoutsTwo}

      case 'EDIT_WORKOUT':
        let workoutsThree = state.workouts.map(workout => {
          if (workout.id === action.payload.id) {
            return action.payload
          } else {
            return workout
          }
        })
        return {...state, workouts: workoutsThree}

      case 'EDIT_EXERCISE':
        let workoutsFour = state.workouts.map(workout => {
          if (workout.id === action.payload.id) {
            return action.payload
          } else {
            return workout
          }
        })
        return {...state, workouts: workoutsFour}
      default:
        return state
    }
}