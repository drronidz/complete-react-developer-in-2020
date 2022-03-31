import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})

export const incrementCartItemQuantity = item => ({
    type: CartActionTypes.INCREMENT_CART_ITEM_QUANTITY,
    payload: item
})

export const decrementCartItemQuantity = item => ({
    type: CartActionTypes.DECREMENT_CART_ITEM_QUANTITY,
    payload: item
})

export const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload:item
})