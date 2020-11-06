import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component {
    constructor() {
        supoer();

        this.state = {

        }
    }

    render() {
        return (
            <div>dashboard component
                <Product/>
            </div>

        )
    }
};

export default Dashboard;