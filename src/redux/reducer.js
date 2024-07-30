import { combineReducers } from "redux";

// Initial state for signup
const signupInitialState = {
    isAuthenticate: false,
    user: null,
    signupData: null
};

// Initial state for cart
const addtocartInitialState = {
    addtocartItems: []
};

// Reducer for signup actions
const signupReducer = (state = signupInitialState, action) => {
    switch(action.type) {
        case 'SET_SIGNUP':
            return {
                ...state,
                signupData: action.payload
            };
        case 'SET_SIGNIN':
            if (state.signupData && state.signupData.email === action.payload.email &&
                state.signupData.password === action.payload.password) {
                return {
                    ...state,
                    isAuthenticate: true,
                    user: action.payload
                };
            }
            return state;
        default:
            return state;
    }
};

// Reducer for cart actions
const addtocartReducer = (state = addtocartInitialState, action) => {
    switch(action.type) {
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

// Combine reducers
const rootReducer = combineReducers({
    signuped: signupReducer,
    addtocartt: addtocartReducer,
});

export default rootReducer;
