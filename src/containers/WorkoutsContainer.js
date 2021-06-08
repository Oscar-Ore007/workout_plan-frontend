import React from 'react'
import { connect } from 'react-redux'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import Workouts from '../components/Workouts'
import WorkoutInput from '../components/WorkoutInput'


class WorkoutsContainer extends React.Component {

    componentDidMount() {
       this.props.fetchWorkouts()
    }

    render() {
        return (
            <div>
                <WorkoutInput /> 
                <Workouts workouts={this.props.workouts} /> 
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        workouts: state.workouts 
    }
}

export default connect(mapStateToProps, {fetchWorkouts})(WorkoutsContainer);