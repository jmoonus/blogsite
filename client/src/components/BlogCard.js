import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoreContext } from './Provider'

function BlogCard({blog, index}) {
    const {setCurrentBlog} = useContext(CoreContext)
    return (
        <div className="blog-card">
            <img className="blog-img" alt="froggy big eyes" src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg.thumb.1160.1160.jpg"/>
            <div className="blog-content">
                <p className="blog-title">{blog.title}</p>
                <p className="blog-date">{blog.date}</p>
                <p className="blog-content">{blog.content}</p>

                <Link to ="/blog" onClick={() => setCurrentBlog(index)}>Read more</Link>
            </div>
        </div>
    )
}

export default BlogCard