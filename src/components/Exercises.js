import React from 'react'
import {connect} from 'react-redux'
import {deleteExercise} from '../actions/deleteExercise'

class Exercises extends React.Component {

state = {}

 handleDelete = (exercise) => {
    this.props.deleteExercise(exercise.id, exercise.workout_id)
  }

vote = (id) => {
  this.state[id] ? this.setState({[id]: this.state[id] += 1}) : this.setState({[id]: 1})
}

render() {
  return (
      <div>
        {this.props.exercises && this.props.exercises.map(exercise =>
          <li key={exercise.id}>{exercise.date} - {exercise.reps} - {exercise.description}  <button onClick={() => this.vote(exercise.id)}>Vote {this.state[exercise.id] ? this.state[exercise.id] : 0}</button><button onClick={() => this.handleDelete(exercise)}>Delete</button></li>
        )}
      </div>
    )
  }
}

export default connect(null, {deleteExercise})(Exercises)