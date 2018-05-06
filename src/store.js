import { createStore, combineReducers } from 'redux'; 
import { reducer as formReducer } from 'redux-form'; 
import blockReducer from './reducers/blockReducers'; 

const reducers = {
    form: formReducer,
    blockReducer: blockReducer
};

const reducer = combineReducers( reducers ); 

const store = createStore( 
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

export default store; 