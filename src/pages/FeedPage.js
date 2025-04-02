import React, { useEffect, useState } from "react";
import { fetchLiveFeed } from "../api";

const FeedPage = () => {
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLiveFeed = async () => {
      try {
        const data = await fetchLiveFeed();
        setFeed(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getLiveFeed();
  }, []);

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Live Feed</h1>
      <ul>
        {feed.map((post, index) => (
          <li key={index}>
            <strong>{post.content}</strong> - Posted by {post.user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedPage;
