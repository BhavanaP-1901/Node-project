// index.js

const http = require('http');
const url = require('url');

// Create server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

    if (path === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: '🏠 Welcome to the Home Page!' }));
    } else if (path === '/about') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'ℹ️ About Page: This is a Node.js example.' }));
    } else if (path === '/contact') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: '📞 Contact us at: hello@example.com' }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: '❌ Page not found' }));
    }
});

// Define port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/`);
});
