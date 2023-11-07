import ProductsTypes from "./types";

export const initialStates = {
    getTerminalsList: [],
    getTerminal: [],
    getTerminalsRequestErrorType: null,
    groupTerminalsValue: {},
    getRootGroups: null
}

const productsReducers = (state = initialStates, action) => {
    switch (action.type) {
        case ProductsTypes.GET_PRODUCTS:
            return {
                ...state,
                getTerminalsRequestErrorType: null
            }
        case ProductsTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                getTerminal: action.payload.data,
                getTerminalsRequestErrorType: action.payload.errorType
            }
        case ProductsTypes.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                getTerminal: null,
                getTerminalsRequestErrorType: action.payload.errorType
            }

        default:
            return {...state}
    }
}

export default productsReducers
