import {combineReducers} from 'redux';
import rootReducers from "./rootReducers";

const configReducers=()=>
    combineReducers({
        ...rootReducers,
    });

export default  configReducers;
