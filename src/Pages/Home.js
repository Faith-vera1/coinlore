import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PostL from '../components/PostL'


const Home = () => {
    const [blog, setBlog] = useState([]);

    const get_data = async () => {
      const res = await fetch("http://127.0.0.1:9000/");
      const data = await res.json();
      setBlog(data);
      console.log(data);
    };
  
    useEffect(() => {
      get_data(); 
      return () => {};
    }, []);
  return (
    <div>
        <PostL blogs={blog}/>
    </div>
  )
}

export default Home