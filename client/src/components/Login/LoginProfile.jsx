import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LoginProfile = () => {
  const {user}= useAuth0()
  console.log(user)
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default LoginProfile