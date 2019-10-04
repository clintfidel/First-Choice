import axios from "axios";
import { GET_PRODUCT_AND_CATEGORY } from "./types";

export const getAllproductsAndCategory = () => dispatch =>
  axios
    .get("/mockData.json")
    .then(response => {
      dispatch({
        type: GET_PRODUCT_AND_CATEGORY,
        product: response.data
      });
    })
    .catch(error => console.error(error));

export const setCategoryIndex = newItem => dispatch =>
  dispatch({
    type: GET_PRODUCT_AND_CATEGORY,
    product: newItem
  });
