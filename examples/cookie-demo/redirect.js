const http = require('http');
// const fs = require('fs');

const port = '3006';

// const html = fs.readFileSync('./index.html');
// console.log(html);

const server = http.createServer((req, res) => {
  // 处理跨域
  if (req.url === '/') {
    res.writeHead(302, {
      Location: '/new',
    });

    res.end('');
  }

  if (req.url === '/new') {
    res.writeHead(200, {
      Location: '/new',
    });

    res.end('<h1>redirect</h1>');
  }
});

server.listen(port, () => {
  console.log(`The app is running on http://0.0.0.0:${port}`);
});
