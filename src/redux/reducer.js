import { combineReducers } from "redux";

// Initial state for signup
const signupInitialState = {
    isAuthenticate: false,
    user: null,
    users: [] // Changed to array to store multiple users
};

// Initial state for cart
const addtocartInitialState = {
    addtocartItems: []
};

// Initial state for total price
const totalPriceInitialState = {
    totalPrice: 0
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
    switch (action.type) {
        case 'SET_ADDTOCART':
            return {
                ...state,
                addtocartItems: [...state.addtocartItems, action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                addtocartItems: state.addtocartItems.filter(item => item.id !== action.payload)
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

// Combine reducers
const rootReducer = combineReducers({
    signuped: signupReducer,
    addtocartt: addtocartReducer,
    totalPrice: totalPriceReducer // Added totalPrice reducer
});

export default rootReducer;
