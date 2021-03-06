const http = require('http');
const fs = require('fs');

const port = '3006';

const html = fs.readFileSync('./index.html', 'utf-8');
// console.log(html);

const server = http.createServer((req, res) => {
  // res.write(html);

  // 处理跨域
  if (req.url === '/') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'PUT,DELETE,PATCH',
      'Content-Type': 'text/html',
    });

    res.end(html);
  }

  if (req.url === '/script.js') {
    const etag = req.headers['if-none-match'];

    if (etag === '666') {
      res.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=200000,no-cache',
        'Last-Modified': '123',
        Etag: '666',
      });

      res.end('');
      return;
    }

    res.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=200000,no-cache',
      'Last-Modified': '123',
      Etag: '666',
    });

    res.end('console.log("loaded 2")');
  }
});

server.listen(port, () => {
  console.log(`The app is running on http://0.0.0.0:${port}`);
});
