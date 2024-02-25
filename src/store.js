import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';



const feelingInfo = (state = {}, action) => {
        if (action.type === 'ADD_FEELING'){
            return action.payload;
        }
        if (action.type === 'CLEAR_FEELING'){
            return {};
        }
        return state;
        }

const understandingInfo = (state = {}, action) => {
        if (action.type === 'ADD_UNDERSTANDING'){
                return action.payload;
        }
        if (action.type === 'CLEAR_UNDERSTANDDING'){
                return {};
        }
        return state;
        }

const supportInfo = (state = {}, action) => {
        if (action.type === 'ADD_SUPPORT'){
                return action.payload;
        }
        if (action.type === 'CLEAR_SUPPORT'){
                return {};
        }
        return state;
        }      
        
const commentsInfo = (state = {}, action) => {
        if (action.type === 'ADD_COMMENTS'){
                return action.payload;
        }
        if (action.type === 'CLEAR_COMMENTS'){
                return {};
        }    
        return state;
        }  

const store = createStore (
        combineReducers({
                feelingInfo,
                understandingInfo,
                supportInfo,
                commentsInfo
        }),
        applyMiddleware(logger),
        );

export default store;