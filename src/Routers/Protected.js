import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
// import { useSelector } from 'react-redux'

export const Protected = ({children, ...rest}) => {
  // const item = JSON.parse(localStorage.getItem('user'))
  // const token = item?.accessToken
  // console.log(token)  

  const token = null;

  return (
    token ? <Outlet /> : <Navigate to="/" />
  )

}
