import React from 'react'
import {connect} from 'react-redux'
import {deleteExercise} from '../actions/deleteExercise'
import { editExercise } from '../actions/editExercise';

class Exercises extends React.Component {

state = {

}

 handleDelete = (exercise) => {
    this.props.deleteExercise(exercise.id, exercise.workout_id)
  }

  makeExerciseCards() {
    return this.props.exercises && this.props.exercises.map(exercise => 
      <div className="card" key={exercise.id}> 
        <h3>{exercise.reps} {exercise.sets} - {exercise.description}</h3>
        <br></br>
        <button onClick={() => this.props.onEdit(exercise)}>EDIT</button>
        <button onClick={() => this.handleDelete(exercise)}>DELETE</button>
        </div>
      )
  }



render() {
  return (
      <div>
        {this.makeExerciseCards()}
        {/* {this.props.exercises && this.props.exercises.map(exercise =>
          <li key={exercise.id}>{exercise.date} - {exercise.reps} - {exercise.description}  <button onClick={() => this.vote(exercise.id)}>Vote {this.state[exercise.id] ? this.state[exercise.id] : 0}</button><button onClick={() => this.handleDelete(exercise)}>Delete</button></li>
        )} */}
      </div>
    )
  }
}

export default connect(null, {deleteExercise, editExercise})(Exercises)