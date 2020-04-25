const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((req, res) => {
  /*
  README.md 파일을 꼭 읽으시길 바랍니다. 모든 basic requirements가 정리되어 있습니다.
  */
  if (req.method === 'POST') {
    if (req.url === '/lower') {
      let data = '';
      req.on('data', chunk => {
        data += chunk;
      });
      req.on('end', () => {
        data = data.toLowerCase();
        res.writeHead(201, defaultCorsHeader);
        res.end(JSON.stringify(data));
      });
    } else if (req.url === '/upper') {
      let data = '';
      req.on('data', chunk => {
        data += chunk;
      });
      req.on('end', () => {
        data = data.toUpperCase();
        res.writeHead(201, defaultCorsHeader);
        res.end(JSON.stringify(data));
      });
    } else {
      res.writeHead(404, defaultCorsHeader);
      res.end();
    }
  }
  if (req.method === 'OPTIONS') {
    res.writeHead(200, defaultCorsHeader);
    res.end();
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};