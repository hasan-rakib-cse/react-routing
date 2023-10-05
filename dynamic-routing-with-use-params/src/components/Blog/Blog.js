import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { blogsData } from '../Data/data';
const Blog = () => {

    const params = useParams(); // we can find the title value/ parameter data/ path value (http://localhost:3000/blogs/path value)

    const[bodyData, setBodyData] = useState("");

    useEffect(() => {
    const blogData = blogsData.filter((blog)=>(blog.title == params.title))
      setBodyData(blogData[0].body); 
    }, [])
    

  return (
    <div>
       <h1>{params.title} Page</h1> {/* we will find the value of title */}
       <p>{bodyData.slice(0, 500)}</p>
       <p>{bodyData.slice(501, 1000)}</p>
    </div>
  )}
export default Blog
