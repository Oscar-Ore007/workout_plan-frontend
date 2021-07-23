import React from 'react';
import ExerciseInput from '../components/ExerciseInput'
import Exercises from '../components/Exercises'



class ExerciseContainer extends React.Component {


        render() {
            return (
                <div>
                    <ExerciseInput exercise={this.props.workout} /><br/> 
                    <Exercises exercises={this.props.workout && this.props.workout.exercises} />  
                </div>
            )
        }
}
export default ExerciseContainer
