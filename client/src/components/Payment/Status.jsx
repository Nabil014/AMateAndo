import React from 'react'
import { useLocation } from "react-router-dom";


const Status = () => {
  const status = useLocation();
  console.log(status)

  return (
    <div>Status</div>
  )
}

export default Status