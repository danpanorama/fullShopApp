import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Loader from './reducers/LoaderReducer'
import ErrorReducer from './reducers/errReducer'
import adminReducer from './reducers/adminReducer'
import productsReducer from './reducers/productsReducer';
import orderReducer from './reducers/orderReducer';
import updateReducer from './reducers/updateReducer'






const reducer = combineReducers({
    Loader: Loader,
 
    err:ErrorReducer,
    admin:adminReducer,
    products:productsReducer,
    orders:orderReducer,
    updateState:updateReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store