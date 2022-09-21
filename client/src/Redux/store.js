import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Loader from './reducers/LoaderReducer'
import cartReducer from './reducers/cartReducer'
import ErrorReducer from './reducers/errReducer'
import userReducer from './reducers/userReducer'
import productsReducer from './reducers/productsReducer';
import orderReducer from './reducers/orderReducer'





const reducer = combineReducers({
    Loader: Loader,
    cart:cartReducer,
    err:ErrorReducer,
    users:userReducer,
    products:productsReducer,
    orders:orderReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store