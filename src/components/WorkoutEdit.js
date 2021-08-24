import React from 'react';
import {connect} from 'react-redux';
import {editWorkout} from '../actions/editWorkout';


class WorkoutEdit extends React.Component {
    state = {
        name: '',
        duration: ''
    }

    componentDidMount() {
        this.setState({
            name: this.props.workout.name,
            duration: this.props.workout.duration
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let workout = {...this.state, id: this.props.workout.id}
        this.props.editWorkout(workout)
        this.props.endEditing()
    }

    render() {
        return (
            <div className="edit-workout-card">
                <h1>Edit Workout</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Edit Workout:</label>
                    <input type="text" name="name" onChange={this.handleChange} defaultValue={this.props.workout.name}/><br></br>
                    <br></br>
                    <label>Workout Duration: </label>
                    <input type="integer" placeholder="duration" name="duration" onChange={this.handleChange} defaultValue={this.props.workout.duration}/><br></br>
                    <br></br>
                    <input type="submit" value="Update Workout"/> 
                </form>
            </div>
        )
    }
}


export default connect(null, {editWorkout})(WorkoutEdit)