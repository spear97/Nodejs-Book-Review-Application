// Import required modules
const express = require('express');
const jwt = require('jsonwebtoken');

// Import the books database
let books = require("./booksdb.js");

// Create a router for registered users
const regd_users = express.Router();

// Array to store registered users
let users = [];

// Function to check if a username is valid
const isValid = (username) => {
    const userMatches = users.filter((user) => user.username === username);
    return userMatches.length > 0;
}

// Function to authenticate a user
const authenticatedUser = (username, password) => {
    const matchingUsers = users.filter((user) => user.username === username && user.password === password);
    return matchingUsers.length > 0;
}

// Handle login for registered users
regd_users.post("/login", (req, res) => {
    console.log("login: ", req.body);
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username || !password) {
        return res.status(404).json({ message: "Error logging in" });
    }
  
    if (authenticatedUser(username, password)) {
        let accessToken = jwt.sign({
            data: password
        }, 'access', { expiresIn: 60 * 60 });
  
        req.session.authorization = {
            accessToken,
            username
        }
        return res.status(200).send("User successfully logged in");
    } else {
        return res.status(208).json({ message: "User successfully logged in" });
    }
});

// Add a book review for authenticated users
regd_users.put("/auth/review/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const review = req.body.review;
    const username = req.session.authorization.username;
    console.log("add review: ", req.params, req.body, req.session);
    if (books[isbn]) {
        let book = books[isbn];
        book.reviews[username] = review;
        return res.status(200).send("Review successfully posted");
    } else {
        return res.status(404).json({ message: "Review successfully posted" });
    }
});

// Export the router for registered users along with other functions and variables
module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
