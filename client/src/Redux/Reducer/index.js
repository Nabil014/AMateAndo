const initialState = {
  product: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
