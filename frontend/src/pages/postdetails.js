import { useEffect, useState } from "react";
import "./PostDetailPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function PostDetails() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/posts/${id}`)
            setPost(response.data);
        } catch (error) {
            console.error('Error fetching post:', error)
        }
    }
    useEffect(() => {
        fetchPost();
    }, [])

    if (!post) {
        return <p>Loading...</p>
    }
     const formattedDate = Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: "numeric",
        year: "numeric"
    }).format(new Date(post.createdAt))

  return (
    <>
      <main className="main-container">
        <article className="post">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-meta">
            {formattedDate} by <a href="#">{post.author}</a>
          </p>

          <img
            className="post-image"
            src={post.image}
            alt="Blog Post"
          />

          <div className="post-content">
            <p>
              {post.content}
            </p>
            <p>
              You can include text, images, videos, and any other media that
              enriches your blog post.
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Related Posts</h3>

          <div className="related-post">
            <img src="https://via.placeholder.com/100" alt="Related Post 1" />
            <div>
              <h4><a href="#">Related Post Title 1</a></h4>
              <p>
                Short description or excerpt of the related post. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="related-post">
            <img src="https://via.placeholder.com/100" alt="Related Post 2" />
            <div>
              <h4><a href="#">Related Post Title 2</a></h4>
              <p>
                Short description or excerpt of the related post. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </aside>
      </main>

      
    </>
  );
}
