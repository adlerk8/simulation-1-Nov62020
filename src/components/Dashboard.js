import React from 'react';
import Product from './Product';

function Dashboard(props) {
    return (
        <ul>
            <li>{props.inventory.map((e) => {
                return <Product key={e.name} product={e}/>})}
            </li>
        </ul>
    )
};

export default Dashboard;