import React from 'react' 
import {connect} from 'react-redux'
import {addExercise} from '../actions/addExercise'

class ExerciseInput extends React. Component {

    state = {
        reps: '0',
        sets: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.prevent.default()
        this.props.addExercise(this.state, this.props.workout.id)
        this.setState({
            reps: '0',
            sets: ''
        })
    }
   render() {
       return (
           <div>
               <form>
                   <label>Exercise Reps: </label>
                   <input type="integer" /> 
                   <label>Exercise Sets:</label>
                   <input type="integer" name='sets' value={this.state.sets} onChange={this.handleChange} /> 
                   <input type="submit" />
               </form>
           </div>
       )
   }
}

export default connect(null, {addExercise})(ExerciseInput)