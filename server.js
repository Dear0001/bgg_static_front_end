const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

const port=3030;
server.listen(port, () => {
  console.log('http://localhost:'+port);
});