import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState, reducers } from '.';
import { createLogger } from 'redux-logger';

export default function configureStore(initialState?: ApplicationState) {

    const loggerMiddleware = createLogger({ collapse: true });

    const middleware = [
        thunk,
        loggerMiddleware
    ];

    const rootReducer = combineReducers({
        ...reducers
    });

    const enhancers : Array<any> = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
