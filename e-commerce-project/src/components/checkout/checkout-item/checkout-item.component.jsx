import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../../redux/cart/cart.actions";
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, removeFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button"
                  onClick={() => removeFromCart(cartItem)}>
                &#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(
    null,
    mapDispatchToProps
)
(CheckoutItem)