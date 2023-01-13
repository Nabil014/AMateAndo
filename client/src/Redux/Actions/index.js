import axios from "axios";

export function getProduct(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get('/api/product?productTitle=' + name);
      dispatch({
        type: "GET_PRODUCT",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  }};

export function postUser(user){
  return async function (dispatch) {
    try {
      const json = await axios.post("/api/user", user);
      console.log(json);
      dispatch({
        type: "POST_USER",
        payload: json.data,
})
    } catch (error) {
      console.log(error);
    }
  }};

export function payment(payload) {
  return async function(dispatch){
    try {
      const res = await axios.post("/api/payment", payload)
      return dispatch({
        type: "PAYMENT",
        payload: res.data
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export function byOrder(payload) {
  return {
    type: "BY_ORDER",
    payload
  }
}