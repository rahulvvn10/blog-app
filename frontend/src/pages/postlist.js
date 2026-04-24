import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./postlist.css";
import Postcard from "../components/card";
import axios from "axios";
import { useState } from "react";
export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [Categories,setcategory]=useState([]);
      const fetchPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/posts");
    setPosts(response.data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
    useEffect(() => {
        fetchPosts();
        fetchCategories();
    }, []);
    const fetchCategories=async()=>{
      try {
    const response = await axios.get("http://localhost:5000/api/categories");
    setcategory(response.data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
    }

  return (
    <>
      

      <main className="main-container">
        <section className="posts">
          <h2>Latest Posts</h2>
{console.log(posts)}
          

         {posts.length>0?
         posts.map((post)=> <Postcard post={post}/>): <p>No posts available</p>}
</section>
        <aside className="sidebar">
          <div className="card">
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="card">
            <h3>Categories</h3>
            <ul>
             {Categories.map(category=><li><Link to={`/posts/category/${category._id}`}>{category.name}</Link></li>)} 
             
            </ul>
          </div>
        </aside>
      </main>

     
    </>
  );
}
