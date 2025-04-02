const BASE_URL = "http://20.244.56.144/evaluation-service";
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAxMDMxLCJpYXQiOjE3NDM2MDA3MzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVkMmRjODA0LWU1ZGEtNGI3Yi1iMGRlLWE4MzZhYzQxNGUzNSIsInN1YiI6IjIyMDUxODc1QGtpaXQuYWMuaW4ifSwiZW1haWwiOiIyMjA1MTg3NUBraWl0LmFjLmluIiwibmFtZSI6InJpZGRoaSBjaGFrYXJib3J0eSIsInJvbGxObyI6IjIyMDUxODc1IiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiNWQyZGM4MDQtZTVkYS00YjdiLWIwZGUtYTgzNmFjNDE0ZTM1IiwiY2xpZW50U2VjcmV0IjoiVHpkTmJ1QXlOYVpISmRneCJ9.ldXrt-N8G8mhFqsklegHijablDh_c8mk-LLBIz23d2Y";

/**
 * Fetches top users from the API.
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Authorization": AUTH_TOKEN,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Fetches trending posts from the API.
 */
export const fetchTrendingPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts/trending`, {
      method: "GET",
      headers: {
        "Authorization": AUTH_TOKEN,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch trending posts: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    throw error;
  }
};

/**
 * Fetches live feed of posts from the API.
 */
export const fetchLiveFeed = async () => {
  try {
    const response = await fetch(`${BASE_URL}/feed`, {
      method: "GET",
      headers: {
        "Authorization": AUTH_TOKEN,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch live feed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching live feed:", error);
    throw error;
  }
};
