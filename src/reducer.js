const initialState = {
  cartProducts: [],
  likedProducts: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productExists = state.cartProducts.some(product => product.id === action.addedProducts.id);
      if (productExists) {
        return state;
      } else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.addedProducts]
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartProducts: state.cartProducts.filter(product => product.id !== action.id)
      };
    case "TOGGLE_LIKE":
      if(state.likedProducts.includes(action.payload)) {
        return {
          ...state,
          likedProducts: state.likedProducts.filter(id => id !== action.payload)
        }
      } else {
        return {
          ...state,
          likedProducts: [...state.likedProducts, action.payload]
        }
      }
    default:
      return state;
  }
}

export {cartReducer};
