import React from 'react'
import NavBar from '../NavBar/NavBar'

const Profile = () => {
  let userInfo = localStorage.getItem("userInfo");
  const userJson = JSON.parse(userInfo)
  console.log(userJson)
  return (
    <div>
      <NavBar />
    {
      userJson ? 
      <div className='bg-gray-100 min-h-[calc(100vh-97px)]'>
        <h1 className='font-bold text-gray-600 text-2xl'>Datos Personales</h1>
        <label>Nombre: </label>
        <h1>{userJson.name + " "+ userJson.lastname}</h1> 
        <label>Email: </label>
        
        <h1>{userJson.email}</h1> 
        <label>Celular: </label>
        <h1>{userJson.cellPhone}</h1> 
      </div>
      
      : "Cargando..."
    }
    </div>
  )
}

export default Profile