# Nodejs Book Review Application

## Description

This project is an Express authentication server that handles user authentication using JSON Web Tokens (JWT) and session management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

To install and run this authentication server locally on your machine, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.

## Usage

To use this authentication server, follow these steps:

1. Make requests to the appropriate routes for user authentication.
2. Ensure that the session middleware is properly configured for the `/customer` route.
3. Implement the authentication middleware for protected routes.
4. Use JSON Web Tokens (JWT) for token-based authentication.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/awesome-feature`).
6. Create a new Pull Request.

# Books Database

The books database contains information about various books, including their authors, titles, and reviews.

## List of Books

1. **Things Fall Apart** by Chinua Achebe
2. **Fairy tales** by Hans Christian Andersen
3. **The Divine Comedy** by Dante Alighieri
4. **The Epic Of Gilgamesh** by Unknown
5. **The Book Of Job** by Unknown
6. **One Thousand and One Nights** by Unknown
7. **Njál's Saga** by Unknown
8. **Pride and Prejudice** by Jane Austen
9. **Le Père Goriot** by Honoré de Balzac
10. **Molloy, Malone Dies, The Unnamable, the trilogy** by Samuel Beckett

# Authentication Server

This authentication server is built using Node.js and Express. It provides routes for user registration, login, and book reviews.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

## Usage

1. Register a new user using the `/register` route.
2. Log in with the registered user credentials using the `/login` route.
3. Access the list of available books using the root route (`/`).
4. Get book details by ISBN, author, or title using the appropriate routes.
5. Post book reviews for authenticated users using the `/auth/review/:isbn` route.

## Start Server

Start the server by running `npm start`. The server will run on port 5000 by default.

# Authentication Middleware

The authentication middleware ensures that only authenticated users can access certain routes in the application.

## Middleware Functions

### `authenticatedUser(username, password)`

This function authenticates a user based on their username and password.

### `isValid(username)`

This function checks if a username is valid and exists in the system.

# Server Configuration

The server is configured to use JSON Web Tokens (JWT) for user authentication and session management.

## Middleware

- `express-session`: Used to manage user sessions.
- `jsonwebtoken`: Used to generate and verify JSON Web Tokens (JWT) for user authentication.

## Routes

- `/register`: Route for user registration.
- `/login`: Route for user login.
- `/auth/review/:isbn`: Route for adding book reviews for authenticated users.

# Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/awesome-feature`).
6. Create a new Pull Request.

# Server Start

To start the server, run the following command:

```bash
npm start
```

# Books Database

The books database contains information about various books, including their authors, titles, and reviews.

## List of Books

1. **Things Fall Apart** by Chinua Achebe
2. **Fairy tales** by Hans Christian Andersen
3. **The Divine Comedy** by Dante Alighieri
4. **The Epic Of Gilgamesh** by Unknown
5. **The Book Of Job** by Unknown
6. **One Thousand and One Nights** by Unknown
7. **Njál's Saga** by Unknown
8. **Pride and Pre
