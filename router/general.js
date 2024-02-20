// Import required modules
const express = require('express');
// Import the books database
let books = require("./booksdb.js");
// Import the isValid function and users array from auth_users module
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;

// Create a router instance for public routes
const public_users = express.Router();

// Route to register a new user
public_users.post("/register", (req, res) => {
    // Extract username and password from request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if both username and password are provided
    if (username && password) {
        // Check if the username already exists
        if (!doesExist(username)) {
            // If username doesn't exist, add the new user to the users array
            users.push({ "username": username, "password": password });
            return res.status(200).json({ message: "User successfully registered. Now you can login" });
        } else {
            // If username already exists, return error message
            return res.status(404).json({ message: "User already exists!" });
        }
    }
    // If username or password is missing, return error message
    return res.status(404).json({ message: "User successfully registered. Now you can login" });
});

// Route to get the list of all books available
public_users.get('/', function (req, res) {
    res.send(JSON.stringify(books, null, 4));
});

// Route to get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const ISBN = req.params.isbn;
    res.send(books[ISBN])
});

// Route to get book details based on author
public_users.get('/author/:author', function (req, res) {
    let ans = []
    for (const [key, values] of Object.entries(books)) {
        const book = Object.entries(values);
        for (let i = 0; i < book.length; i++) {
            if (book[i][0] == 'author' && book[i][1] == req.params.author) {
                ans.push(books[key]);
            }
        }
    }
    if (ans.length == 0) {
        return res.status(300).json({ message: "Author not found" });
    }
    res.send(ans);
});

// Route to get all books based on title
public_users.get('/title/:title', function (req, res) {
    let ans = []
    for (const [key, values] of Object.entries(books)) {
        const book = Object.entries(values);
        for (let i = 0; i < book.length; i++) {
            if (book[i][0] == 'title' && book[i][1] == req.params.title) {
                ans.push(books[key]);
            }
        }
    }
    if (ans.length == 0) {
        return res.status(300).json({ message: "Title not found" });
    }
    res.send(ans);
});

// Route to get book reviews based on ISBN
public_users.get('/review/:isbn', function (req, res) {
    const ISBN = req.params.isbn;
    res.send(books[ISBN].reviews)
});

// Export the router for public routes
module.exports.general = public_users;
