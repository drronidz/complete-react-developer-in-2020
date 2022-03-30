import React from "react";
import './checkout.styles.scss'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout/checkout-item/checkout-item.component";
import CheckoutHeader from "../../components/checkout/checkout-header/checkout-header.component";

const CheckoutPage = ({ cartItems, totalPrice}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <CheckoutHeader name={"Name"}/>
            <CheckoutHeader name={"Description"}/>
            <CheckoutHeader name={"Quantity"}/>
            <CheckoutHeader name={"Price"}/>
            <CheckoutHeader name={"Remove"}/>
        </div>
        { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>) }
        <div className="total">
            <span> Total: ${totalPrice}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)