import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            productName: '',
            price: 0.,
            imgurl: ''
        }
    }

    imgurlInput = (e) => {
        this.setState({imgurl: e})
    };

    productInput = (e) => {
        this.setState({productName: e})
    };

    priceInput = (e) => {
        this.setState({price: e})
    };

    clearForm = () => {
        this.setState({productName: ''})
        this.setState({price: 0.})
        this.setState({imgurl: ''})
    };

    render() {
        return (
        <div>
            <input onChange={(e) => this.imgurlInput(e.target.value)} value={this.state.img}>Image URL:</input>
            <input onChange={(e) => this.productInput(e.target.value)} value={this.state.productName}>Product Name:</input> 
            <input onChange={(e) => this.priceInput(e.target.value)} value={this.state.price}>Price:</input>    
            <button onClick={() => this.clearForm()}>Cancel</button>
            <button onClick={() => this.props.addInventory()}>Add to Inventory</button>
        </div>
        )
    }
};

export default Form;