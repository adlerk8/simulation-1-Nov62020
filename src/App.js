import React from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
    </div>
  );
}

export default App;
