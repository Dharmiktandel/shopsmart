// src/redux/reducer.js

import { combineReducers } from 'redux';

// Initial state for signup
const signupInitialState = {
    isAuthenticate: false,
    user: null,
    users: [] // Changed to array to store multiple users
};

const vendorSignupInitialState = {
      isAuthenticate:false,
      user:null,
      users:[]
};

// Initial state for cart
const addtocartInitialState = {
    addtocartItems: []
};

// Initial state for total price
const totalPriceInitialState = {
    totalPrice: 0
};

const cartDetailsInitialState = {
    detailedItems: [] // New state for storing detailed items
};

const vendorNewProductInitialState = {
    vendorItem : []
}
const placedOrderInitialState = {
    newPlacedOrder : []
}

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

const addVendorsNewProductReducer = (state = vendorNewProductInitialState, action)=> {
    switch (action.type) {
        case 'SET_ADD_PRODUCT':
          return{
            ...state,
            vendorItem:[...state.vendorItem,action.payload]
          }; 
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                vendorItem: state.vendorItem.filter((_, index) => index !== action.payload),
            };   
          default:
             return state
           
    }
}

const vendorSignupReducer = (state = vendorSignupInitialState,action) => {
    switch(action.type){
        case 'SET_VENDORSIGNUP':
            return{
                ...state,
                users:[...state.users,action.payload],
                
            };
        case 'SET_VENDORSIGNIN':
                const user = state.users.find(
                    u => u.vendorEmail === action.payload.vendorEmail && u.vendorPassword === action.payload.vendorPassword
                );
                if (user) {
                    return {
                        ...state,
                        isAuthenticate: true,
                        user: user
                    };
                }
                return state;  
                case 'SET_LOGOUT':
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
        case 'SET_ADDTOCART': {
            const { emails, item } = action.payload;
            return {
                ...state,
                addtocartItems: {
                    ...state.addtocartItems,
                    [emails]: [...(state.addtocartItems[emails] || []), item]
                }
            };
        }
        
        case 'CLEAR_CART': {
            return {
                ...state,
                addtocartItems: {
                    ...state.addtocartItems,
                    [action.payload]: [], // Clear cart for the specific user
                }
            };
        }
        
        case 'REMOVE_FROM_CART': {
            const { emails, itemId } = action.payload;
            console.log("Emails:", emails);
            console.log("ItemId:", itemId);
            
            const userCart = state.addtocartItems[emails] || []; // Ensure it's an array
            console.log("Current Cart:", userCart);
            
            // Filter out the item by its id
            const updatedCart = userCart.filter(item => item.id !== itemId);
            console.log("Updated Cart:", updatedCart);
        
            return {
                ...state,
                addtocartItems: {
                    ...state.addtocartItems,
                    [emails]: updatedCart.length > 0 ? updatedCart : [] // Handle empty cart
                }
            };
        }
        
        
        
        
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

const placedOrderedReducer = (state = placedOrderInitialState, action ) => {
    switch (action.type) {
        case 'SET_PLACE_ORDER':
            return {
             ...state,
             newPlacedOrder:[...state.newPlacedOrder ,action.payload]
            }
            default:
                return state;
    }

};

// Combine reducers
const rootReducer = combineReducers({
    signuped: signupReducer,
    addtocartt: addtocartReducer,
    totalPrice: totalPriceReducer ,
    cartDetails: cartDetailsReducer,
    vendorsignuped:vendorSignupReducer,
    vendorAddproducts : addVendorsNewProductReducer,
    newPlacedOrdereddd : placedOrderedReducer
});

export default rootReducer;
