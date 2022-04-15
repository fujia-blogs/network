const http = require('http');
const fs = require('fs');
// const zlib = require('zlib');

const port = '3006';

const html = fs.readFileSync('./index.html', 'utf-8');
// console.log(html);

const wait = (seconds) =>
  new Promise((resolve) => setTimeout(() => resolve(), seconds * 1000));

const server = http.createServer((req, res) => {
  // res.write(html);

  // 处理跨域
  if (req.url === '/') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'PUT,DELETE,PATCH',
      'Content-Type': 'text/html',
      // 'Content-Encoding': 'gzip',
    });

    res.end(html);
  }

  if (req.url === '/data') {
    res.writeHead(200, {
      Vary: 'X-Test-Cache',
      'Cache-Control': 's-maxage=200',
    });
    wait(2).then(() => res.end('success'));
  }
});

server.listen(port, () => {
  console.log(`The app is running on http://0.0.0.0:${port}`);
});
