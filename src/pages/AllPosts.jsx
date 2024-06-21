import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { PostCard, Container, Loader } from '../components'

function AllPosts() {
  const [posts, setPosts]=useState([]);
  const [loading, setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    appwriteService.getPosts([]).then((posts)=>{
      if(posts){
        setPosts(posts.documents)
      }
      setLoading(false);
    })
    
  },[])

  

  
  return <>
  {
    loading ? (<Loader/>) :
    (
    
      <div className='w-full py-8'>
          <Container>
              <div className='flex flex-wrap'>
                  {posts.map((post) => (
                      <div key={post.$id} className='p-2 w-1/4'>
                          <PostCard {...post} />
                      </div>
                  ))}
              </div>
            </Container>
      </div>
    )
  }
  
  </>
}

export default AllPosts