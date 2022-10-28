import React from "react";
import { GoogleLogout } from "react-google-login";
const clientId =  "599718821872-hhje7rdvlv3cq5v55a1e2oe22ok6qd04.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    console.log("Log out Success!");
  };
  return (
    <div id="singOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
