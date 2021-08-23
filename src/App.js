import React from 'react';
import WorkoutsContainer from './containers/WorkoutsContainer'
import NavBar from './components/NavBar';
import './App.css';




class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar /> 
        <h1>Workout Planner</h1>
        <WorkoutsContainer />
      </div>
    );
  }

}


export default App;
