# Social Media Analytics Frontend Web Application

This project is a **React-based Social Media Analytics Frontend Web Application** that provides real-time insights into user activity, trending posts, and a live feed. The app is designed for business stakeholders monitoring user behavior and does not require authentication.

## Features

- **Top Users:** Displays the top five users with the highest number of posts.
- **Trending Posts:** Shows the post(s) with the maximum number of comments.
- **Live Feed:** Updates dynamically to show the latest posts in real-time.
- **Optimized API Calls:** Ensures minimal API requests without compromising user experience.
- **Responsive UI:** Built with **Bootstrap** for a professional and engaging user interface.

## Tech Stack

- **Frontend:** React.js, Bootstrap
- **State Management:** React Hooks
- **Data Fetching:** Axios

## Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/social-media-analytics.git
   cd social-media-analytics
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Application**
   ```sh
   npm start
   ```

## Available Scripts

### `npm start`
Runs the app in development mode. The page reloads on changes.

### `npm run build`
Creates an optimized production build.

### `npm test`
Launches the test runner in interactive watch mode.

## API Endpoints Used

- **Get Users:** `GET http://20.244.56.144/evaluation-service/users`
- **Get Posts:** `GET http://20.244.56.144/evaluation-service/users/:userId/posts`
- **Get Comments:** `GET http://20.244.56.144/evaluation-service/posts/:postId/comments`

## Notes

- Uses a **Bearer Token** for authentication when making API requests.
- The UI is designed for a seamless and intuitive user experience.
- API calls are optimized to reduce unnecessary requests.

## License

This project is licensed under [MIT License](LICENSE).

---

This README follows the format you requested while keeping it professional and concise. Let me know if you need any modifications! 🚀
