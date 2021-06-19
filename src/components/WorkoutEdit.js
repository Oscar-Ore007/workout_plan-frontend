import React from 'react'
import {connect} from 'react-redux'
import {editWorkout} from '../actions/editWorkout'


class WorkoutEdit extends React.Component {
    state = {
        name: '',
        duration: ''
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
        this.setState({
            name: '',
            duration: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Workout name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>Workout Duration: </label>
                    <input type='text' placeholder='Duration' value={this.state.duration} name="duration" onChange={this.handleChange}/><br/>
                    <input type="submit" /> 
                </form>
            </div>
        )
    }
}

WorkoutEdit.defaultProps ={ 
    workouts: {}
}

export default connect(null, {editWorkout})(WorkoutEdit)