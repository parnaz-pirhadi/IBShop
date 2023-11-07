import axios from "axios"
import {put, takeLatest} from "redux-saga/effects"
import {
    getProductsSuccess,
    getProductsFailure
} from "./actions"
import ProductsTypes from "./types";

export function* getProducts(action) {
    try {
        // const {defaultWidthQueryString} = generateQueryParams(action.payload)
        const response = yield axios.get(`/terminal/getTerminals?${action.payload}`,
            {
                withCredentials: true
            })

        yield put(getProductsSuccess({
            statusCode: response.status,
            errorType: response?.data?.errorType || null,
            data: response.data
        }))
    } catch (err) {
        console.log("err: ", err)
        yield put(getProductsFailure({
            statusCode: err?.response.status,
            errorType: err?.response?.data?.errorType || null
        }))
    }
}


const productsSaga = [
    takeLatest(ProductsTypes.GET_PRODUCTS, getProducts)
]

// function generateQueryParams(obj) {
//     let defaultWidthQueryString = ""
//     Object.keys(obj).map((key, index) => {
//         if (obj[key] !== null && obj[key] !== undefined) {
//             if (typeof obj[key] === 'object') {
//                 Object.entries(obj[key]).map((key2, index2) => {
//                     if (key2[1] !== "") {
//                         defaultWidthQueryString += `${key}.${key2[0]}=${key2[1]}${index !== Object.keys(obj).length - 1 ? "&" :
//                             index2 !== Object.keys(key2).length - 1 ? "&" : ""}`
//                     }
//
//                 })
//             } else {
//                 if (obj[key] !== '')
//                     defaultWidthQueryString += `${key}=${obj[key]}${index !== Object.keys(obj).length - 1 ? "&" : ""}`
//
//             }
//         }
//     })
//     return {
//         defaultWidthQueryString
//     }
// }


export default productsSaga
