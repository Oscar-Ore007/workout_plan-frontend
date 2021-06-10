import React from 'react' 
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'

class WorkoutInput extends React.Component {
    
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
        this.props.addWorkout(this.state) 
        this.setState({
            name: '',
            duration: ''
        })

    }
    
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Workout Name</label>
                   <input type='text' placeholder='name' value={this.state.name} name="name" onChange={this.handleChange}/> <br></br>
                   <label>Workout Duration</label>
                   <input type='integer' placeholder='Duration in Minutes' value={this.state.duration} name="duration" onChange={this.handleChange}/> 
                   <input type="submit"/>
               </form>
            </div>
        )
    }
}

export default connect(null, {addWorkout})(WorkoutInput) 