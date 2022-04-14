const http = require('http');
const fs = require('fs');
// const zlib = require('zlib');

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
      'Content-Type': 'text/html;charset=utf-8',
      // 'Content-Security-Policy': 'default-src http: https:',
      'Content-Security-Policy': 'default-src "self"',
    });

    res.end(html);
  }
});

server.listen(port, () => {
  console.log(`The app is running on http://0.0.0.0:${port}`);
});
