import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import initialState from './initialState';
import configureReducers from './configureReducers';
import configureSaga from './configureSaga';
import rootReducers from './rootReducers';
import persistStore from "redux-persist/es/persistStore";

const configureStore = () => {
    const reducers = configureReducers(rootReducers);
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware];

    const enhancers = [applyMiddleware(...middlewares)];
    const composeEnhancers =
        process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: 'Mozapic',
                actionsBlacklist: ['REDUX_STORAGE_SAVE'],
            })
            : compose;

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(...enhancers),
    );

    sagaMiddleware.run(configureSaga);
    persistStore(store)

    return store;
};

export default configureStore;
