import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Logo width="100px" />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
          <Link className="hover:text-gray-400" to="/">Features</Link>
          <Link className="hover:text-gray-400" to="/">Pricing</Link>
          <Link className="hover:text-gray-400" to="/">Affiliate Program</Link>
          <Link className="hover:text-gray-400" to="/">Press Kit</Link>
          <Link className="hover:text-gray-400" to="/">Account</Link>
          <Link className="hover:text-gray-400" to="/">Help</Link>
          <Link className="hover:text-gray-400" to="/">Contact Us</Link>
          <Link className="hover:text-gray-400" to="/">Customer Support</Link>
          <Link className="hover:text-gray-400" to="/">Terms & Conditions</Link>
          <Link className="hover:text-gray-400" to="/">Privacy Policy</Link>
          <Link className="hover:text-gray-400" to="/">Licensing</Link>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; 2023 DevUI. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
