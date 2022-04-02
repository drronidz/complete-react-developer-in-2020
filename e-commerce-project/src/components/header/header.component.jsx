import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import { auth } from "../../firebase/firebase.utilis";

import {ReactComponent as Logo } from "../../assets/crown.svg"

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./header.styles";
import CartIcon from "../cart/cart-icon/cart-icon.component";
import CartDropDown from "../cart/cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden } ) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/">HOME</OptionLink>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {currentUser
                ? (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>)
                : (<OptionLink to={"/sign-in"}>SIGN IN</OptionLink>)
            }
            <CartIcon/>
        </OptionsContainer>
        { hidden ? null : <CartDropDown/> }
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
