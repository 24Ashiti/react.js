import {configureStore} from '@reduxjs/toolkit'
import RootReducer from './RootReducer'
// import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import productSaga from './ProductSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:RootReducer,
    middleware:() => [sagaMiddleware]
})

middleware.run(productSaga)

export default store