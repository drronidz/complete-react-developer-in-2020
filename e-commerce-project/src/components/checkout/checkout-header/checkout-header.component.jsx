import React from "react";
import './checkout-header.styles.scss'

const CheckoutHeader = ({name}) => (
    <div className="header-block">
        <span>{ name }</span>
    </div>
)

export default CheckoutHeader