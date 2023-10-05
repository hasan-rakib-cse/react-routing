import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { blogsData } from '../Data/data';

const Blog = () => {

    const params = useParams();
    const location = useLocation() // we can use state from useLocation() hook

  return (
    <div>
        <h1>{params.title} Page</h1>
        <p>{location.state.body.slice(0, 500)}</p> {/* we access state value by location variable */}
        <p>{location.state.body.slice(501, 1000)}</p>
        <p>{location.state.body.slice(1001, 2000)}</p>
    </div>
  )}
export default Blog
