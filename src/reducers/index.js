import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import app from './app-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    app,
});

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
