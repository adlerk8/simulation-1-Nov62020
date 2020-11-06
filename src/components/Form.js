import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

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
        this.setState({productName: ''});
        this.setState({price: 0.});
        this.setState({imgurl: ''});
    };

    render() {
        return (
        <div>
            <div className="inputFields">Image URL:
                <input onChange={(e) => this.imgurlInput(e.target.value)} value={this.state.imgurl}/>
            </div>
            <div className="inputFields"> Product Name:
                <input onChange={(e) => this.productInput(e.target.value)} value={this.state.productName}/> 
            </div>
            <div className="inputFields">Price:
                <input onChange={(e) => this.priceInput(e.target.value)} value={this.state.price}/>    
            </div>
            <div className="buttons">
                <button onClick={() => this.clearForm()}>Cancel</button>
                <button onClick={() => this.props.addInventory(this.state)}>Add to Inventory</button>
            </div>
        </div>
        )
    }
};

export default Form;