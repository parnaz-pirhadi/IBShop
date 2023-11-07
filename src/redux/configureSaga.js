import {all} from "redux-saga/effects";
import rootSagas from "./rootSagas";

function* configureSaga(){
    yield all([...rootSagas])
}

export default configureSaga
