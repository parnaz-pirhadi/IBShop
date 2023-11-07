import {createAction} from "../../reduxHelpers";
import ProductsTypes from "./types";

const getProducts = createAction(ProductsTypes.GET_PRODUCTS);
const getProductsSuccess = createAction(ProductsTypes.GET_PRODUCTS_SUCCESS);
const getProductsFailure = createAction(ProductsTypes.GET_PRODUCTS_FAILURE);

export {
    getProducts,
    getProductsSuccess,
    getProductsFailure
};
