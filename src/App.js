import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }
  

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    );
  }
}

export default App;
