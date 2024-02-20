// Import required modules
const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');

// Import router modules
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

// Create an Express app instance
const app = express();

// Parse JSON requests
app.use(express.json());

// Set up session middleware for the "/customer" route
app.use("/customer", session({ secret: "fingerprint_customer", resave: true, saveUninitialized: true }));

// Middleware for authentication
app.use("/customer/auth/*", function auth(req, res, next) {
    // Check if authorization object is stored in the session
    if (req.session.authorization) {
        // Retrieve the access token from the authorization object
        const token = req.session.authorization['accessToken'];
        // Verify the token using JWT
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                return res.status(403).json({ message: "User not authenticated" });
            }
        });
    } else {
        return res.status(403).json({ message: "User not logged in" });
    }
});

// Define the port for the server
const PORT = 5000;

// Route handling
app.use("/customer", customer_routes);
app.use("/", genl_routes);

// Start the server
app.listen(PORT, () => console.log("Server is running"));
