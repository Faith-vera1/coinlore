import React from 'react'

function PostL({blogs}) {
  return (
    <div>PostL
{blogs.map( (blog) => {
    return(
        <div key={blog._id}>
            <h1> {blog.title}  </h1> 
            
             </div>
    )
})}

    </div>
  )
}

export default PostL