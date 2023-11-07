import storage from 'redux-persist/lib/storage/session';
import {persistReducer} from "redux-persist";
import {productsReducers} from "./ducks";

const productsConfig = {
    key: 'products',
    storage,
    // blacklist:'showLoginModal'
};


const rootReducers = {
    products: persistReducer(productsConfig, productsReducers)
};

export default rootReducers;
