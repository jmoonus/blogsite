import React, { useContext } from 'react'
import BlogCard from './BlogCard'
import { CoreContext } from './Provider'

function Home() {
    const{blogs} = useContext(CoreContext)

    return (
        <div className="listview">
        {blogs.map((blog, index) => (
          <BlogCard blog ={blog} index={index}/> //props, passing in data 
        ))}
      </div>
    )
}

export default Home