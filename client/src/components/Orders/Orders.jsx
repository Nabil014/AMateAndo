import React from 'react'
import CardOrder from './CardOrder'

const Orders = ({showShop}) => {
    let products = localStorage.getItem("products");
    const productsJson = JSON.parse(products)
  return (
    <div className={`bg-red-300 right-0 w-72 h-[calc(100vh-97px)] z-50 fixed transition-all ${showShop? "right-0":"-right-full"}`}><CardOrder/></div>
  )
}

export default Orders