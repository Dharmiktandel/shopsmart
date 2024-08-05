// src/redux/action.js
export const setRegisterdata = (item) => ({
    type: 'SET_SIGNUP',
    payload: item
});

export const setSignin = (email, password) => ({
    type: 'SET_SIGNIN',
    payload: { email, password }
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const addToCart = (item) => ({
    type: 'SET_ADDTOCART',
    payload: item
});

export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId
});
