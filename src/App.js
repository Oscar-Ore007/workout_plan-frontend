import React from 'react';
import {connect} from 'react-redux';
import WorkoutsContainer from './containers/WorkoutsContainer'
import './App.css';




class App extends React.Component {

  render() {
    return (
      <div className="App">
        <WorkoutsContainer />
      </div>
    );
  }

}


export default App;
