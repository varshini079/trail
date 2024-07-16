Here's the complete README file including the provided content and the details about the API endpoints and backend structure:

---

# Style Buddies - Myntra Hackathon Project

## Project Overview

Welcome to the Style Buddies project! This project was created for a hackathon with the aim of providing an immersive and interactive shopping experience. Style Buddies integrates social media functionalities and user-generated content to create a unique fashion destination. Users can share their fashion styles, add products to curated lists, and view a leaderboard of top users and curations.

## Features

### Style Buddies
- Users can post their images with links to products available on Myntra.
- Users can add descriptions and specify their body type.
- Users can browse posts created by other users.

### Curations
- Users can add products they like to a list of curated collections.
- Similar to Pinterest boards or YouTube playlists.

### Leaderboard
- Displays top users and top curations.

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/varshini079/trail.git
    ```

2. **Install dependencies:**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary dependencies using npm:

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

4. **Open the application:**

    Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

The backend for the StyleBuddies project is built using Node.js and Express.js. This server provides RESTful APIs to manage user profiles, social interactions (style buddies), posts, likes, rewards, and leaderboard data.

### User Routes

**Base URL:** `/api/v1/users`
- `POST /` - Create a new user
- `GET /:uid` - Retrieve a user's details by their UID
- `PUT /:uid` - Update a user's details by their UID

### Social Routes (StyleBuddies)

**Base URL:** `/api/v1/styleBuddies`
- `POST /` - Create a new style buddy
- `GET /:uid` - Retrieve a style buddy's details by their UID
- `PUT /:uid` - Update a style buddy's details by their UID
- `DELETE /:uid` - Delete a style buddy by their UID

### Post Routes

**Base URL:** `/api/v1/posts`
- `POST /` - Create a new post
- `GET /:uid` - Retrieve a post by its UID
- `PUT /:uid` - Update a post by its UID
- `DELETE /:uid` - Delete a post by its UID

### Like Routes

**Base URL:** `/api/v1/likes`
- `POST /` - Create a new like
- `GET /:uid` - Retrieve a like by its UID
- `DELETE /:uid` - Delete a like by its UID

### Reward Routes

**Base URL:** `/api/v1/rewards`
- `POST /` - Create a new reward
- `GET /:uid` - Retrieve a reward by its UID
- `PUT /:uid` - Update a reward by its UID
- `DELETE /:uid` - Delete a reward by its UID

### Leaderboard Routes

**Base URL:** `/api/v1/leaderboard`
- `POST /` - Create a new leaderboard entry
- `GET /` - Retrieve the leaderboard
- `PUT /:uid` - Update a leaderboard entry by its UID
- `DELETE /:uid` - Delete a leaderboard entry by its UID

## Usage

- **Home Page**: Start exploring the platform.
- **Camera Page**: Capture or upload images to share your style.
- **Collection Page**: View and manage your curated collections.
- **Leaderboard**: Check the top users and curations.
- **Profile Page**: View and edit your profile.
- **Rewards Page**: View and redeem rewards.
- **Side Navigation Bar**: Navigate through different sections of the app.
- **Top Navigation Bar**: Access key actions and user settings.

## Technologies Used

This project leverages a variety of modern web development technologies:

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework that provides pre-styled components.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **JavaScript (ES6+)**: The main programming language used for the logic and interactivity.
- **HTML5 & CSS3**: For structuring and styling the web pages.
- **Figma**: Used for designing the UI and creating prototypes.
- **Vite**: A fast development build tool for modern web projects.
- **Node.js**: A JavaScript runtime used for building the server-side application.
- **Firebase**: Database for storing user data and posts.

## License

This project is licensed under the MIT License.

---

Feel free to customize any sections as needed.
