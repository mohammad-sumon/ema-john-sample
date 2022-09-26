import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p><small>Ratings: {ratings}</small></p>
                <p><small>Seller: {seller}</small></p>
            </div>
                <button onClick={()=> props.handleAddToCart(props.product)} className='cart-btn'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;