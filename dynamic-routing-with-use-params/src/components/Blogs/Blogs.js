import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { blogsData } from '../Data/data';
const Blogs = () => {

   const navigate = useNavigate();//use the useNavigate() hook for redirect
    
    const [blogs, setBlogs] = useState(blogsData)

    const truncateString = (str, num) => {
        if(str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }}

    return (
        <div>
            <h1>Blog Page</h1>
            <section className='blogSection'>
                {blogs.map((blog) => {
                    const {id, title, body} = blog;
                    return (
                        <article key={id}>
                            <h3>Title: {title}</h3>
                            <p>Body: {truncateString(body, 100)}</p>
                            <Link to={title} >Learn More</Link> 
                        </article>
                    )
                })}
            </section>
            <button onClick={() => {navigate("/")}}>Home</button>
            <button onClick={() => {navigate("/contact")}}>Contact</button>
        </div>
      )}
export default Blogs
