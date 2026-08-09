const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3005;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // API Endpoint to save products JSON dynamically
  if (req.method === 'POST' && urlPath === '/api/products') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        fs.writeFileSync(path.join(__dirname, 'data', 'products.json'), body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Products updated successfully!' }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // API Endpoint to save jobs JSON dynamically
  if (req.method === 'POST' && urlPath === '/api/jobs') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        fs.writeFileSync(path.join(__dirname, 'data', 'jobs.json'), body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Jobs updated successfully!' }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, decodeURIComponent(urlPath === '/' ? 'index.html' : urlPath));
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`, 'utf-8');
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache' 
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Santhi Ganesh Bakery server running at http://localhost:${PORT}`);
});
