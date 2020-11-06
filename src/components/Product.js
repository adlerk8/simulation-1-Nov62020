import React from 'react';

function Product(props) {
    return (
    <div className="oneProduct">
        <div id="img">{props.imgurl}</div>
        <div id="productName">{props.productName}</div>
        <div id="price">{props.price}</div>
    </div>    
    )
};

export default Product;