import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        {name: 'beans',
        price: 2,
        imgurl: 'https://unsplash.com/photos/FW7Amhh_B8A'},
        {name: 'mushroom',
        price: 1,
        imgurl: 'https://unsplash.com/photos/fiuIhECcnv8'},
        {name: 'horse',
        price: 4,
        imgurl: 'https://unsplash.com/photos/xcvMhWJe-qQ'}
      ]
    }
  }
  
  addToInventory = () => {
    let productPush = [...this.state.inventory];
    productPush.push()
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
      </div>
    );
  }
}

export default App;
