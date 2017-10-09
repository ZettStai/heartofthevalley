import React, { Component } from 'react';
import MuralList from './MuralList';
import MuralForm from './MuralForm';
import DATA from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <h2>Murals:</h2>
      <MuralList data={ DATA }/>
      <MuralForm />
    )
  }
}

export default App;
