import React from 'react'
import {Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus=useSelector((state)=>state.status);
  const navigate=useNavigate()

  const navItems=[
    {
        name:"Home",
        slug:"/" ,//can be given as url
        active:true
    },
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
    <header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to="/">
                        <Logo width='70px'/>
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    {navItems.map((item)=>(
                        item.active ? (
                            <li key={item.name}>
                                <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
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