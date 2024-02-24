import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const feelingProfile = (state = [], action) =>{
        if (action.type === "ADD_FEELING"){
                return [...state, action.payload];
        }
        return state;
}


const store = createStore(
        combineReducers({
                feelingProfile,
        }),
        applyMiddleware(logger),
        )

export default store;