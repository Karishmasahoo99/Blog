import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition duration-300 hover:scale-105">
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden p-4 hover:shadow-lg">
            <div className="w-full flex justify-center mb-4">
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title} 
                    className="rounded-xl object-cover w-60 h-40" // Fixed size
                />
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
