export const setRegisterdata = (itemm) =>
({
    type: 'SET_SIGNUP',
    payload: itemm
})
export const setSignin = (email, password) =>
({
    type: 'SET_SIGNIN',
    payload: { email, password }
})
export const addToCart = (item) =>
(
    {
        type: 'SET_ADDTOCART',
        payload: item
    }
)

export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId
});