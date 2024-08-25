// src/redux/action.js

import { type } from "@testing-library/user-event/dist/type";

// Existing actions
export const setRegisterdata = (item) => ({
    type: 'SET_SIGNUP',
    payload: item
});

export const setVendorRegisterData = (item) => ({
    type:'SET_VENDORSIGNUP',
    payload:item
})

export const setSignin = (email, password) => ({
    type: 'SET_SIGNIN',
    payload: { email, password }
});
export const setVendorSignin = (vendorEmail,vendorPassword) => ({
    type:'SET_VENDORSIGNIN',
    payload:{vendorEmail,vendorPassword}
});

export const logout = () => ({
    type: 'LOGOUT'
});
export const clearCart = () => ({
    type: 'CLEAR_CART'
});
export const vendorLogout = () => ({
    type:'SET_LOGOUT'
})

export const addToCart = (emails, item) => ({
    type: 'SET_ADDTOCART',
    payload:  {emails, item}
});

export const removeFromCart = (emails , itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: {emails, itemId}
});

// New actions for total price
export const setTotalPrice = (totalPrice) => ({
    type: 'SET_TOTAL_PRICE',
    payload: totalPrice
});

export const clearTotalPrice = () => ({
    type: 'CLEAR_TOTAL_PRICE'
});

export const setAddProduct = (item) => ({
    type: 'SET_ADD_PRODUCT',
    payload: item
})
export const removeProduct = (index) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: index,
    };
};
export const setPlacedOrder = (item) => {
    return{
        type:'SET_PLACE_ORDER',
        payload:item
    }
}


