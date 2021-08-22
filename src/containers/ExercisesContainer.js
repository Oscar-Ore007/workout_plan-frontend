import React from 'react';
import ExerciseInput from '../components/ExerciseInput'
import Exercises from '../components/Exercises'
import ExerciseEdit from '../components/ExerciseEdit'



class ExerciseContainer extends React.Component {

    state = {
        exerciseToBeEdited: null
    }

    handleEdit = (exercise) => {
        this.setState({
            exerciseToBeEdited: exercise
        })

    }

    hideEdit = () => {
        this.setState({
            exerciseToBeEdited: null 
        })
    }


        render() {
            return (
                <div>
                    {
                        !this.state.exerciseToBeEdited && <ExerciseInput workout={this.props.workout} />
                    }
                    {
                        this.state.exerciseToBeEdited && <ExerciseInput exercise={this.state.exerciseToBeEdited} onSave={this.hideEdit} />
                    }
                    <Exercises exercises={this.props.workout && this.props.workout.exercises} onEdit={this.handleEdit} />
                </div>
            )
        }
}
export default ExerciseContainer
