// reducer.js
import { combineReducers } from "redux";

const signupInitialState = {
    isAuthenticate: false,
    user: null,
    signupData: null
};
const addtocartInitialState = {
    addtocartItems : []
}


const signupReducer = (state = signupInitialState,action) => 
    {
        switch(action.type){
            case 'SET_SIGNUP':
                return{
                    ...state,
                    signupData:action.payload
                }
            case 'SET_SIGNIN':
                if(state.signupData && state.signupData.email === action.payload.email &&
                   state.signupData.password === action.payload.password )
                   {
                    return{
                        ...state,
                        isAuthenticate:true,
                        user:action.payload
                    }
                   }
                   else{
                    return state;
                   }
    
                default:
                    return state
        }
    }


    const addtocartReducer = (state = addtocartInitialState,action) => {
        switch(action.type){
            case 'SET_ADDTOCART':
                 return{
                    ...state,addtocartItems:[...state.addtocartItems,action.payload]
                 }
    
                 default:
                    return state
                
        }
    }


const rootReducer = combineReducers({
    signuped: signupReducer,
    addtocartt:addtocartReducer,
});

export default rootReducer;
