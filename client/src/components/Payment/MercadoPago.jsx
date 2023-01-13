import React, { useEffect, useState } from "react";
const FORM_ID = "payment-form";

export default function MercadoPago({ preferenceId }) {
    console.log(preferenceId?.preferenceId)
  useEffect(() => {
    if (preferenceId) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      //  "https://sdk.mercadopago.com/js/v2"
      script.setAttribute("data-preference-id", preferenceId?.preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  },[preferenceId]);
  return (
    <div >
    <form id={FORM_ID} method="GET" />
   
    </div>
  )
}
