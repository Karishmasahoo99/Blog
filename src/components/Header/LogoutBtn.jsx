import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { IoMdLogOut } from "react-icons/io";


function LogoutBtn() {
  const dispatch=useDispatch();
  const logoutHandler=()=>{
    authService.logout().then(
        dispatch(logout())
    )
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:scale-105 rounded-full' onClick={logoutHandler}>
      <IoMdLogOut size={25}/>
    </button>
  )
}

export default LogoutBtn