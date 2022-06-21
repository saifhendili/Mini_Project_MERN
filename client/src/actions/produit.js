import axios from 'axios';
import { SetAlert } from './alert';

import {
    ADD_PRODUCT,GET_PRODUCT,GET_PRODUCTS,EDIT_PRODUCT,DELETE_PRODUCT,ERROR_PRODUCT
} from './Types';

export const addProduct = (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/produit/`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
      dispatch(SetAlert('Product Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_PRODUCT 
    });
    }
  };

  export const getProduct = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/produit/${id}`,
      );
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getProducts = () => async (dispatch) => {

    try {
      const res = await axios.get(`/api/produit/`,
      );
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteProduct = (id) => async (dispatch) => {
    try {
    const res=  await axios.delete(`/api/produit/${id}`);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.data,
      });
      dispatch(SetAlert('Product Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editProduct = (id,formData) => async (dispatch) => {
    try {
   await axios.put(`/api/produit/${id}`, formData,);
  
      dispatch({
        type: EDIT_PRODUCT,
      });
      dispatch(SetAlert('Product Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };