import { Link } from 'react-router-dom';

export default function Postcard({ post }) {
  return (
    <article className="post-card">
      <img src={post.image} alt="Post" />
      {console.log(post.image)}
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 50)}...</p>
        <Link to={`/posts/${post._id}`} className="read-more">
          Read More
        </Link>
      </div>
    </article>
  );
}
