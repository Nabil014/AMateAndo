// import axios from "axios";
// import jwt_decode from "jwt-decode";

// export const createOrGetUserGoogle = async (user) => {
//   const decoded = jwt_decode(user.credential)

//   const { email, name, sub, family_name, given_name } = decoded;

//   const userObject = {
//     _id: sub,
//     name: name,
//     email,
//     lastname: family_name,
//     name: given_name,
//   }

//     //forma antigua
//   //  localStorage.setItem("userInfo", JSON.stringify(userObject));
//   //  await axios.post("/api/login/google", userObject);

//   const infoGuest = await axios.post("/user", userObject);
// //   if(infoGuest.data === "Usuario Baneado"){
// //    throw new Error
// //   }
//   console.log("aqui",infoGuest.data)
//   localStorage.setItem("userInfo", JSON.stringify(infoGuest.data));
//   return infoGuest  
// };