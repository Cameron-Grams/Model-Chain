import { createStore, combineReducers } from 'redux'; 
import { reducer as formReducer } from 'redux-form'; 
import blockReducer from './reducers/blockReducers'; 
import minerReducer from './reducers/minerReducer'; 

const reducers = {
    form: formReducer,
    block: blockReducer,
    miner: minerReducer
};

const reducer = combineReducers( reducers ); 

const store = createStore( 
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

export default store; 