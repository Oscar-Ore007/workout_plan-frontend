import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import Workouts from '../components/Workouts'
import Workout from '../components/Workout'
import WorkoutInput from '../components/WorkoutInput'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Home from '../components/Home'




class WorkoutsContainer extends React.Component {

    componentDidMount() {
       this.props.fetchWorkouts()
    }

    render() {
        return (
            <div className="body">
                <Switch>
                    <Route exact path='/' component={Home}/> 
                    <Route path='/workouts/new' component={WorkoutInput}/> 
                    <Route path='/workouts/:id' render={(routerProps) => <Workout {...routerProps} workouts={this.props.workouts}/>}/>
                    <Route path='/workouts' render={(routerProps) => <Workouts {...routerProps} workouts={this.props.workouts}/>}/>
                </Switch>
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