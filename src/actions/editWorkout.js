export const editWokrout = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/workouts/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(workout => dispatch({type: 'EDIT_WORKOUT', payload: workout}))
    }
  
  }