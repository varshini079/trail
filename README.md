<p><a target="_blank" href="https://app.eraser.io/workspace/LjlXdSDVkxMox6Mc0vMt" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

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
## Backend Integration
### Firestore
The project uses Firestore as the primary database for storing user data, posts, likes, rewards, and leaderboard information. Firestore is a flexible, scalable database for mobile, web, and server development.

#### Firestore Structure
- **Users Collection:**
    - Each document represents a user.
    - Fields: `name` , `email` , `profileImage` , `bodyType` , etc.
- **StyleBuddies Collection:**
    - Each document represents a style buddy post.
    - Fields: `userId` , `imageUrl` , `productLinks` , `description` , `bodyType` , etc.
- **Posts Collection:**
    - Each document represents a post.
    - Fields: `userId` , `content` , `timestamp` , `likes` , etc.
- **Likes Collection:**
    - Each document represents a like.
    - Fields: `userId` , `postId` , `timestamp` , etc.
- **Rewards Collection:**
    - Each document represents a reward.
    - Fields: `userId` , `rewardDetails` , `timestamp` , etc.
- **Leaderboard Collection:**
    - Each document represents a leaderboard entry.
    - Fields: `userId` , `points` , `rank` , etc.
## API Endpoints
The backend for the StyleBuddies project is built using Node.js and Express.js. This server provides RESTful APIs to manage user profiles, social interactions (style buddies), posts, likes, rewards, and leaderboard data.

### User Routes
**Base URL:** `/api/v1/users` 

- `POST /`  - Create a new user
- `GET /:uid`  - Retrieve a user's details by their UID
- `PUT /:uid`  - Update a user's details by their UID
### Social Routes (StyleBuddies)
**Base URL:** `/api/v1/styleBuddies` 

- `POST /`  - Create a new style buddy
- `GET /:uid`  - Retrieve a style buddy's details by their UID
- `PUT /:uid`  - Update a style buddy's details by their UID
- `DELETE /:uid`  - Delete a style buddy by their UID
### Post Routes
**Base URL:** `/api/v1/posts` 

- `POST /`  - Create a new post
- `GET /:uid`  - Retrieve a post by its UID
- `PUT /:uid`  - Update a post by its UID
- `DELETE /:uid`  - Delete a post by its UID
### Like Routes
**Base URL:** `/api/v1/likes` 

- `POST /`  - Create a new like
- `GET /:uid`  - Retrieve a like by its UID
- `DELETE /:uid`  - Delete a like by its UID
### Reward Routes
**Base URL:** `/api/v1/rewards` 

- `POST /`  - Create a new reward
- `GET /:uid`  - Retrieve a reward by its UID
- `PUT /:uid`  - Update a reward by its UID
- `DELETE /:uid`  - Delete a reward by its UID
### Leaderboard Routes
**Base URL:** `/api/v1/leaderboard` 

- `POST /`  - Create a new leaderboard entry
- `GET /`  - Retrieve the leaderboard
- `PUT /:uid`  - Update a leaderboard entry by its UID
- `DELETE /:uid`  - Delete a leaderboard entry by its UID
- Setup Instructions
Follow these steps to set up and run the project locally:

1. **Clone the repository:**git clone https://github.com/varshini079/trail.git
2. **Install dependencies:** Make sure you have [﻿Node.js](https://nodejs.org/)  installed. Then, install the necessary dependencies using npm:npm install
3. **Start the development server:**npm start
4. **Open the application:** Open your browser and navigate to `http://localhost:3000`  to view the application.
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


<!-- eraser-additional-content -->
## Diagrams
<!-- eraser-additional-files -->
<a href="/README-Style Buddies Project Workflow-1.eraserdiagram" data-element-id="oNfMx9Z_3y11WcBKcefoz"><img src="/.eraser/LjlXdSDVkxMox6Mc0vMt___8EoQP08HYDdp9NgprXA81YxbFRh2___---diagram----e688f3d272cdf44835b6c4f26c5642aa-Style-Buddies-Project-Workflow.png" alt="" data-element-id="oNfMx9Z_3y11WcBKcefoz" /></a>
<!-- end-eraser-additional-files -->
<!-- end-eraser-additional-content -->
<!--- Eraser file: https://app.eraser.io/workspace/LjlXdSDVkxMox6Mc0vMt --->