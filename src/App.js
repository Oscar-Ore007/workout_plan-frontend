import React from 'react';
import {connect} from 'react-redux';
import WorkoutsContainer from './containers/WorkoutsContainer'




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
