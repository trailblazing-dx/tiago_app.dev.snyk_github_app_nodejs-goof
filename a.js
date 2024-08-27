// a.js

const http = require('http');
const sanitizeInput = require('./sanitize.js');

http.createServer((req, res) => {
    const userInput = req.url.substring(1); // Get input from the URL path
    const sanitizedInput = sanitizeInput(userInput);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>${sanitizedInput}</h1>`);
}).listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});
