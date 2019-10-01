import { GET_PRODUCT_AND_CATEGORY } from '../actions/types';

const initialState = {
	products: [],
};

const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCT_AND_CATEGORY: {
			return {
				...state,
				products: action.product,
			};
		}

			
		default:
			return state;

	}
}

export default ProductReducer;