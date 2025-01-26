# Poll Application

# Backend Implementation
A Node.js/Express-based application for creating polls, voting on poll options, and viewing individual votes. This system includes:

- **Poll creation** with 2–7 options
- **Vote casting** (with timestamp and optional user info)
- **Aggregated vote counts** within each poll
- **Storage of individual votes** in a separate collection

## Table of Contents


1. [Getting Started](#getting-started)  
2. [Running the Application](#running-the-application)  
3. [API Endpoints](#api-endpoints)  
4. [Technology Stack](#technology-stack)  
5. [Architecture Overview](#architecture-overview)  
6. [Testing](#testing)

---


## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/eslylescano/Display-task.git
   cd backend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

---

## Running the Application

1. **Start the Server**:
   ```bash
   npm start
   ```
   This should log that the server is listening on the configured port (e.g., `http://localhost:4000`).

2. **Check**  
   Go to [http://localhost:4000](http://localhost:4000). If you have a root route set up, it may display a welcome message.

---

## API Endpoints

All endpoints are prefixed by `/api` (or similar), depending on your configuration.

1. **Create Poll**  
   **`POST /api/polls`**  
   **Body**:
   ```json
   {
     "question": "Who will win the Premier League?",
     "options": [
       { "name": "Manchester City" },
       { "name": "Arsenal" },
       { "name": "Liverpool" }
     ]
   }
   ```
   - **Response** (201 Created): Returns the newly created poll document.

2. **List Polls**  
   **`GET /api/polls`**  
   - **Response** (200 OK): An array of all polls, each with aggregated votes in `options[]`.

3. **Retrieve Poll by ID**  
   **`GET /api/polls/:id`**  
   - **Response** (200 OK): Poll object with `_id`, `question`, and `options[]`.

4. **Cast a Vote**  
   **`POST /api/polls/:id/vote/:optionName`**  

   - **Response** (200 OK): Returns the **updated poll document** with incremented vote counts for the chosen option.  
   
   **Example**:
   ```bash
   POST http://localhost:4000/api/polls/6794e3a549e1cdbcc188254e/vote/Arsenal
   ```
   **Sample Response**:
   ```json
   {
       "_id": "6794e3a549e1cdbcc188254e",
       "question": "Who will win the Premier League?",
       "options": [
           {
               "name": "Manchester City",
               "votes": 3,
               "_id": "6794e3a549e1cdbcc188254f"
           },
           {
               "name": "Arsenal",
               "votes": 2,
               "_id": "6794e3a549e1cdbcc1882550"
           },
           {
               "name": "Liverpool",
               "votes": 0,
               "_id": "6794e3a549e1cdbcc1882551"
           }
       ],
       "createdAt": "2025-01-25T13:14:13.317Z",
       "__v": 0
   }
   ```

5. **List Votes**  
   **`GET /api/polls/:id/votes`**  
   - **Response** (200 OK): Array of vote documents for this poll, each with `optionName`, `timestamp`, and `userInfo`.

---

## Technology Stack

- **Node.js** and **Express** for the server and routing.
- **MongoDB & Mongoose** for data storage (Polls and Votes).
- **Mocha**, **Chai**, or **Jest** for testing.


---

## Architecture Overview

This application follows a **layered** architecture:

1. **Models**: Define the shape of data in MongoDB (e.g., `Poll.js`, `Vote.js`).  
2. **Repositories**: Perform **CRUD** operations on the models. The repositories are split into `PollRepository` and `VoteRepository`. They contain no domain logic—just database interactions.  
3. **Services**: Contain **business logic** (e.g., ensuring polls have 2+ options, incrementing votes, creating separate vote records with timestamps). This layer references repository methods for actual DB operations.  
4. **Controllers**: Receive **HTTP requests** and delegate to the service. They handle **HTTP status** codes and **response formatting**.  
5. **Routes**: Bind **URLs** to controller methods.  
6. **Entry Points** (`app.js`, `server.js`): Initialize Express, connect to MongoDB, and start the server.

---

## Testing

### **Running Tests**
```bash
npm test
```

### **Test Strategy**
- **Integration Tests**: You can see `test/poll.test.js` checks:
  1. **Creating a poll** (`POST /api/polls`)
  2. **Listing polls** (`GET /api/polls`)
  3. **Retrieving by ID** (`GET /api/polls/:id`)
  4. **Casting a vote** (`POST /api/polls/:id/vote/:optionName`)
  5. **Listing individual votes** (`GET /api/polls/:id/votes`)



# Poll Application - Frontend

This is the frontend implementation of the **Poll Application**, built using React.js. The frontend serves as the user interface for interacting with the backend system, enabling users to create polls, cast votes, and view aggregated results. It focuses on a modular component-based structure for scalability and maintainability.

---

## Features


- **Vote Casting**: Users can select a poll and cast their vote for one of the available options.
- **Result Display**: Poll results are displayed with aggregated vote counts for each option.
- **Global State Management**: Uses the Context API to manage global state for polls and votes.
- **Reusable Components**: Designed for code reusability and maintainability.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Running the Application](#running-the-application)
5. [Technology Stack](#technology-stack)
6. [Folder Overview](#folder-overview)

---


## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/eslylescano/Display-task.git
   cd frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Backend URL**
   Open `pollService.js` in the `services` folder and configure the backend API URL:
   ```javascript
   const BASE_URL = 'http://localhost:4000/api';
   export default BASE_URL;
   ```

---

## Running the Application

1. **Start the Development Server**
   ```bash
   npm start
   ```
   This will launch the application on [http://localhost:3000](http://localhost:3000).

2. **Access the Application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

3. **Access the Application**
   For now it is been harcoded an poll on the url, so it is easy to test. http://localhost:3000/vote/6796913d2086c1718b444661
   If another poll is created in the backend, with just changing the url, the frontend will render different poll.

---

## Technology Stack

- **React.js**: For building the user interface.
- **React Context API**: For global state management.
- **CSS Modules**: Scoped styling for individual components/pages.

---

## Folder Overview

### **Assets**
Contains static assets like images, icons, and global styles (`global.css`).

### **Components**
Houses reusable UI components like `PollOptions`, `PollQuestion`, and `ResultsDisplay`, designed for reusability across the application.

### **Context**
Uses React Context API to manage the application's global state, such as the list of polls, selected poll details, and voting data.

### **Pages**
Defines the application's main pages:
- `ResultsPage`: Displays poll results with aggregated vote counts.
- `VotePage`: Allows users to cast votes for poll options.

### **Services**
Handles all API calls to the backend. `pollService.js` includes methods for fetching polls, casting votes, and retrieving results.

---
