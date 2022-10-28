import axios from "axios";

export function getProduct(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/api/product?name=${name}`);
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