// app.js

const buildQuery = require('./queryBuilder');

// Simulating a database connection and query execution
function executeQuery(query) {
    console.log("Executing Query:", query);

    // Here you would normally execute the query against your database
    // db.execute(query); 
}

// User input from a hypothetical form
let userInput = "1 OR 1=1";  // Malicious input that can cause SQL Injection

// Columns to retrieve from the database
let columns = ['id', 'name', 'email'];

// Using the function from File A
let query = buildQuery('users', columns, `id=${userInput}`);

// Execute the query
executeQuery(query);
