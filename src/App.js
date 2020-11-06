import React, {Component} from 'react';
import axios from 'axios';
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
  
  componentDidMount() {
    axios.get('/api/iventory')
    .then((res) => {
      this.setState({inventory: res.data})
    })
    .catch((err) => console.log(err))
  }

  addToInventory = (product) => {
    let productPush = [...this.state.inventory];
    productPush.push(product);
    this.setState({inventory: productPush});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form addInventory={this.addToInventory}/>
      </div>
    );
  }
}

export default App;
