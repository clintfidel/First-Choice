import axios from 'axios';
import { GET_PRODUCT_AND_CATEGORY } from './types'

export const getAllproductsAndCategory = () => dispatch =>
  axios.get('/mockData.json')
    .then((response) => {
      console.log(response, 'response')
      dispatch({
        type: GET_PRODUCT_AND_CATEGORY,
        product: response.data
      });
    })
    .catch(error => console.error(error));
