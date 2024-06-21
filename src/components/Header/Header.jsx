import React from 'react'
import {Container, LogoutBtn } from '../../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoHome } from "react-icons/io5";


function Header() {
  const authStatus=useSelector((state)=>state.user.status);
  const navigate=useNavigate()

  const navItems=[
    {
        name:"Login",
        slug:"/login" ,//can be given as url
        active:!authStatus
    },
    {
        name:"Signup",
        slug:"/signup" ,//can be given as url
        active:!authStatus
    },
    {
        name:"All Posts",
        slug:"/all-posts" ,//can be given as url
        active: authStatus
    },
    {
        name:"Add Post",
        slug:"/add-post" ,//can be given as url
        active: authStatus
    },

  ]
  return (
    <header className='py-3 shadow bg-black text-white'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to="/">
                        <IoHome size={30} className='hover:scale-105'/>
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    {navItems.map((item)=>(
                        item.active ? (
                            <li key={item.name}>
                                <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:scale-105 rounded-full'>{item.name}</button>
                            </li>
                        ) : null
                    ))}
                    {
                        authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header