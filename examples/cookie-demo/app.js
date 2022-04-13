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
      'Set-Cookie': ['token=123456;max-age=2', 'id=789'],
    });

    res.end(html);
  }
});

server.listen(port, () => {
  console.log(`The app is running on http://0.0.0.0:${port}`);
});
