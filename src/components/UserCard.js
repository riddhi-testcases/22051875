// src/components/UserCard.js
import React from "react";

const UserCard = ({ name, postCount }) => {
  return (
    <div className="card shadow p-3 mb-3">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Posts: {postCount}</p>
    </div>
  );
};

export default UserCard;
