import {
    ADD_PRODUCT,GET_PRODUCT,GET_PRODUCTS,EDIT_PRODUCT,DELETE_PRODUCT,ERROR_PRODUCT
} from '../actions/Types';
 
  const initialState = {
    loading: true,
    produits: [],
    produit: null,
    error: {},

  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS :
            return {
                ...state,
                produits: payload,
                loading: false,
            };
        case GET_PRODUCT :
            return {
                ...state,
                produit: payload,
                loading: false,
            };
      case ADD_PRODUCT:
            return {
                ...state,
                produit: payload,
                loading: false,
            };
            case DELETE_PRODUCT:
                return {
                  ...state,
                  produits: payload,
                  
                  loading: false,
                };
              case ERROR_PRODUCT:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }