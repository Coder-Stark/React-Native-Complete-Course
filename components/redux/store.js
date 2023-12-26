import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import SagaData from './saga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    //xyz : rootReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(SagaData);
export default store;