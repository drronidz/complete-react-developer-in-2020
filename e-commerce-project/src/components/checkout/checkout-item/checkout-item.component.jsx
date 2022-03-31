import React from "react";
import { connect } from "react-redux";
import {
    decrementCartItemQuantity,
    incrementCartItemQuantity,
    removeItemFromCart
} from "../../../redux/cart/cart.actions";
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, incrementCartItem, decrementCartItem, removeItemFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decrementCartItem(cartItem)}>
                    &#10094;
                </div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => incrementCartItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button"
                  onClick={() => removeItemFromCart(cartItem)}>
                &#10005;
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    incrementCartItem : item => dispatch(incrementCartItemQuantity(item)),
    decrementCartItem : item => dispatch(decrementCartItemQuantity(item))
})

export default connect(
    null,
    mapDispatchToProps
)
(CheckoutItem)