const initialState = {
  product: [],
  productId: [],
  cart: {
    cartItem: [],
    preferenceId: [],
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "GET_PRODUCT_BY_ID":
      return {
        ...state,
        productId: action.payload,
      };
    case "CARD_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cart.cartItem.find(
        (item) => item.slug === newItem.slug
      );
      //una condicion para actualizar si existe el item o guardar si no existe
      const cartItem = existItem
        ? state.cart.cartItem.map((item) =>
            item.title === existItem.title ? newItem : item
          )
        : //de lo contrario si no existe entonces guardamos el primero
          [...state.cart.cartItem, newItem];
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItem,
        },
      };
    }
    case "PAYMENT":
      return {
        ...state,
        preferenceId: action.payload,
      };
    
    default:
      return state ;
  }
}

export default rootReducer;
