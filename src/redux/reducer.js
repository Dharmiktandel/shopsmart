import { combineReducers } from 'redux';

// Initial state for signup
const signupInitialState = {
    isAuthenticate: false,
    user: null,
    users: [] // Changed to array to store multiple users
};

// Initial state for cart
const addtocartInitialState = {
    cartItems: {} // Object to store cart items keyed by user email
};

// Initial state for total price
const totalPriceInitialState = {
    totalPrice: 0
};

// Initial state for cart details
const cartDetailsInitialState = {
    detailedItems: [] // New state for storing detailed items
};

// Reducer for signup actions
const signupReducer = (state = signupInitialState, action) => {
    switch (action.type) {
        case 'SET_SIGNUP':
            return {
                ...state,
                users: [...state.users, action.payload] // Add new user to the list
            };
        case 'SET_SIGNIN':
            const user = state.users.find(
                u => u.email === action.payload.email && u.password === action.payload.password
            );
            if (user) {
                return {
                    ...state,
                    isAuthenticate: true,
                    user: user
                };
            }
            return state;
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticate: false,
                user: null
            };
        default:
            return state;
    }
};

// Reducer for cart actions
const addtocartReducer = (state = addtocartInitialState, action) => {
    const { userEmail } = action.payload || {}; // Extract userEmail from action payload

    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload.item;
            const updatedCartItems = { ...state.cartItems };

            if (!updatedCartItems[userEmail]) {
                updatedCartItems[userEmail] = [];
            }

            updatedCartItems[userEmail] = [...updatedCartItems[userEmail], newItem];

            return {
                ...state,
                cartItems: updatedCartItems
            };

        case 'REMOVE_FROM_CART':
            const { itemId } = action.payload;
            const filteredCartItems = (state.cartItems[userEmail] || []).filter(item => item.id !== itemId);

            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [userEmail]: filteredCartItems
                }
            };

        default:
            return state;
    }
};

// Reducer for total price actions
const totalPriceReducer = (state = totalPriceInitialState, action) => {
    switch (action.type) {
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload
            };
        case 'CLEAR_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: 0
            };
        default:
            return state;
    }
};

// Reducer for cart details
const cartDetailsReducer = (state = cartDetailsInitialState, action) => {
    switch (action.type) {
        case 'SET_CART_DETAILS':
            return {
                ...state,
                detailedItems: action.payload
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    signuped: signupReducer,
    addtocartt: addtocartReducer,
    totalPrice: totalPriceReducer,
    cartDetails: cartDetailsReducer
});

export default rootReducer;
