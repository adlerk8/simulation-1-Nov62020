import React from 'react';

function Product(props) {
    return (
    <div className="oneProduct">
        <div id="img">{props.product.imgurl}</div>
        <div id="productName">{props.product.productName}</div>
        <div id="price">{props.product.price}</div>
    </div>    
    )
};

export default Product;