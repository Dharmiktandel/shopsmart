// Existing actions
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

export const addToCart = (item, userEmail) => ({
    type: 'ADD_TO_CART',
    payload: { item, userEmail }
});

export const removeFromCart = (itemId, userEmail) => ({
    type: 'REMOVE_FROM_CART',
    payload: { itemId, userEmail }
});

// New actions for total price
export const setTotalPrice = (totalPrice) => ({
    type: 'SET_TOTAL_PRICE',
    payload: totalPrice
});

export const clearTotalPrice = () => ({
    type: 'CLEAR_TOTAL_PRICE'
});
