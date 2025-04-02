import React, { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingPosts = async () => {
      try {
        const data = await fetchTrendingPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getTrendingPosts();
  }, []);

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Trending Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>{post.title}</strong> - {post.likes} Likes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
