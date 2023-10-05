import { Link, useNavigate } from 'react-router-dom'

import { blogsData } from '../Data/data';
import { useState } from 'react';

const Blogs = () => {

    const navigate = useNavigate();
    
    const [blogs, setBlogs] = useState(blogsData)

    const truncateString = (str, num) => {
        if(str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
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
        <Link to={title} state={{id, title, body}}>Learn More</Link> {/* data passing with state as object and received by useLocation() hook in Blog.js */}
       </article>
            )
                })}
            </section>
            <button onClick={() => {navigate("/")}}>Home</button>
            <button onClick={() => {navigate("/contact")}}>Contact</button>
        </div>
      )}
export default Blogs
