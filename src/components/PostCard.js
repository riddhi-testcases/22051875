// src/components/PostCard.js
import React from "react";

const PostCard = ({ content, commentCount }) => {
  return (
    <div className="card shadow p-3 mb-3">
      <p className="card-text">{content}</p>
      <small className="text-muted">{commentCount} comments</small>
    </div>
  );
};

export default PostCard;
