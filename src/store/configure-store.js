import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => {
    if(process.env.NODE_ENV === 'production'){
        return createStore(rootReducer,
            applyMiddleware(thunk)
        );
    }else{
        return createStore(rootReducer, initialState, composeEnhancers(
            applyMiddleware(thunk, loggerMiddleware)
        ));
    }
};
