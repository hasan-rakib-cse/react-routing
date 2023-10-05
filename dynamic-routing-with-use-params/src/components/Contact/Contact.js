import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Contact Page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tenetur animi harum consequatur doloribus dolor in doloremque necessitatibus nobis praesentium perferendis quas, exercitationem cum. Ad odit dolorem nobis unde quia.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tenetur animi harum consequatur doloribus dolor in doloremque necessitatibus nobis praesentium perferendis quas, exercitationem cum. Ad odit dolorem nobis unde quia.</p>
        <button onClick={() => {navigate("/")}}>Home</button>
        <button onClick={() => {navigate("/blogs")}}>Blog</button>
    </div>
  )
}

export default Contact