import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "redux/constants/productConstants";

// fake data request simulator
import data from "data/products";

export const productList = () => (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // request data from server here
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    showError(dispatch, PRODUCT_LIST_FAIL, error);
  }
};

export const productDetails = (id) => (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    // request data from server here
    const product = data.find((p) => id === p._id);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: product });
  } catch (error) {
    showError(dispatch, PRODUCT_DETAILS_FAIL, error);
  }
};

function showError(dispatch, type, error) {
  dispatch({
    type,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
