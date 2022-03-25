import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utilis";

import {ReactComponent as Logo } from "../../assets/crown.svg"

import './header.styles.scss'
import CartIcon from "../cart/cart-icon/cart-icon.component";
import CartDropDown from "../cart/cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden } ) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/">HOME</Link>
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {currentUser
                ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                : (<Link className="option" to={"/sign-in"}>SIGN IN</Link>)
            }
            <CartIcon/>
        </div>
        { hidden ? null : <CartDropDown/> }
    </div>
)
const mapStateToProps = ({user : { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)
