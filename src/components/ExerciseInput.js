import React from "react";
import {connect} from "react-redux";
import {addExercise} from "../actions/addExercise";

class ExerciseInput extends React.Component {

    state = {
        reps: "",
        sets: "",
        date: "",
        description: ""
      
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.prevent.default()
        this.props.addExercise(this.state, this.props.workout.id)
        this.setState({
            reps: "",
            sets: "",
            date: "",
            description: ""
        });
    };
   render() {
       return (
           <div className='new-exercise-card'>
               <form onSubmit={this.handleSubmit}>
                   <h1>Add an Exercise to this Workout:</h1>
                   <label>Exercise Reps: </label>
                   <input 
                        type="integer" 
                        placeholder='0'
                        name='reps'
                        value={this.state.reps}
                        onChange={this.handleChange}
                        /> 
                    <br></br>
                    <br></br>
                   <label>Exercise Sets:</label>
                   <input 
                    type="integer" 
                    placeholder='0'
                    name='sets' 
                    value={this.state.sets} 
                    onChange={this.handleChange} 
                    /> 
                    <br></br>
                    <br></br>
                <label>Date:</label>
                <input 
                    type='date'
                    placeholder= 'DD-MM-YYYY'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                /> 
                <br></br>
                <br></br>
                <label>Description:</label>
                    <input
                    type='text'
                    placeholder='description'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                <br></br>
                <br></br>
                   <input type="submit"></input>
               </form>
           </div>
       )
   }
}

export default connect(null, {addExercise})(ExerciseInput)