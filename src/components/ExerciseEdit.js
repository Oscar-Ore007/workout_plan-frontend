import React from 'react';
import { connect } from 'react-redux';
import { editExercise } from '../actions/editExercise'


class ExerciseEdit extends React.Component {
    state = {
        workout_id: '',
        reps: '',
        sets: '',
        date: '',
        description: ''
    }

    componentDidMount() {
        this.setState({
            workout_id: this.props.exercise.workout_id,
            reps: this.props.exercise.reps,
            sets: this.props.exercise.sets,
            date: this.props.exercise.date,
            description: this.props.exercise.description
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let exercise = {...this.state, id: this.props.exercise.id}
        console.log(this.props.exercise)
        this.props.editExercise(exercise)
        this.exercise.onSave();
    }

    render() {
        return (
            <div className="edit-card">
                <h1>Edit Exercise</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Exercise Reps:</label>
                        <input type="integer" placeholder="0" name="reps" defaultValue={this.props.exercise.reps} onChange={this.handleChange}/><br></br>
                        <br></br>
                    <label>Exercise Sets:</label>
                    <input type="integer" placeholder="0" name="sets" defaultValue={this.props.exercise.sets} onChange={this.handleChange}/><br></br>
                        <br></br>
                    <label>Date:</label>
                    <input type="date" placeholder="DD-MMM-YYYY" name="date" defaultValue={this.props.exercise.date} onChange={this.handleChange}/><br></br>
                        <br></br>
                    <label>Exercise Description:</label>
                    <input type="text" placeholder="Description" name="description" defaultValue={this.props.exercise.description} onChange={this.handleChange}/><br></br>
                        <br></br>
                    <input type="submit" value="Edit this Exercise"></input>
                </form>
            </div>
        )
    }
}
export default connect(null, {editExercise})(ExerciseEdit);