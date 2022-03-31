import CartActionTypes from "./cart.types";
import {addItemToCart, decrementCartItemQuantity, removeItemFromCart} from "./cart.utils";
import {incrementCartItemQuantity} from "./cart.actions";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.DECREMENT_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decrementCartItemQuantity(state.cartItems, action.payload)
            }

        case CartActionTypes.INCREMENT_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload.id)
            }

        default:
            return state
    }
}

export default cartReducer