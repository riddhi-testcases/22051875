import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getTopUsers();
  }, []);

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Top Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> - {user.followers} Followers
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
