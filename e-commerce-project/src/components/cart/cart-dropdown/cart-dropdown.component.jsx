import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../../custom-button/custom-button.component";

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>Go to CheckOUT</CustomButton>
    </div>
)

export default CartDropDown