import { combineReducers } from 'redux';

import ProductReducer from './product';



const rootReducer = combineReducers({
    productsList: ProductReducer,
});

export default rootReducer;