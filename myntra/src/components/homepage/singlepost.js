import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Post from './card'; // Adjust path as needed
import './singlePost.css'; // Adjust path as needed

const SinglePost = () => {
    const navigate = useNavigate();

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setOtherPosts(data.filter(item => item.id !== id)));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  const handleProfileClick = () => {
    navigate(`/user/${post.userId}`);
  };


  return (
    <>
    <div className="detailed-post">
      <div className="post-header" onClick={handleProfileClick}>
        <img className="profile-image" src="https://via.placeholder.com/50" alt="Profile" />
        <h2 className="profile-name">Profile Name</h2>
      </div>
      <div className="post-content">
        <div className="post-left">
          <div className="post-details">
            <img className="post-image" src={post.image} alt={post.category} />
            <h2>{post.category}</h2>
            <p>{post.description}</p>
          </div>
        </div>
        <div className="post-right">
          <h3>User Body Type</h3>
          <p>Example Body Type Info</p>
          <h3>Review</h3>
          <p>Example Review</p>
          <h3>Seller</h3>
          <p>Example Seller</p>
          <h3>Tags</h3>
          <p>Example Tags</p>
          <button onClick={() => window.open("https://www.myntra.com/tunics/ahalyaa/ahalyaa-mandarin-collar-printed-sequinned-tunic/24189530/buy", "_blank")}>Shop the Magic</button>
        </div>
      </div>
      </div>
      <div className="other-posts">
        <h2>Other Posts</h2>
        <div className="post-list">
          {otherPosts.map(item => (
            <Post key={item.id} id={item.id} category={item.category} image={item.image} />
          ))}
        </div>
      </div>
    
    </>
  );
};

export default SinglePost;
