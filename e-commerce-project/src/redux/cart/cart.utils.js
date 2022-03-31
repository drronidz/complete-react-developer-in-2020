import {selectCartItems} from "./cart.selectors";

const existingCartItem = (cartItems, cartItemTo) => (cartItems.find(cartItem => cartItem.id === cartItemTo.id))

export const addItemToCart = (cartItems, cartItemToAdd) => {

    if (existingCartItem(cartItems, cartItemToAdd)) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


export const decrementCartItemQuantity = (cartItems, cartItemToDecrement) => {

    if (existingCartItem(cartItems, cartItemToDecrement).quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrement.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToDecrement.id
            ? { ...cartItem, quantity : cartItem.quantity - 1 }
            : cartItem
    )
}

export const removeItemFromCart = (cartItems, cartItemToRemoveId) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemoveId)
}