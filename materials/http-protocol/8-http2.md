# http2

1. 优势：

- 信道复用
- 分帧传输，每一帧都有一个上下文的联系，即 http 请求的数据不需要连续顺序进行发送。由于可以分帧传输，在 http2 中可以一个 TCP 连接上并发的发送不同的请求。
- server push

2. 在 http/1.1 中，一个 TCP 的连接中发送的 http 请求必须是连续的，它是串行的。

3. Link

header/Link 是 http2 定义中可以指定该请求想要推送哪些内容。

```js
res.writeHead(200, {
  Link: '</test.jpg>; as=image; rel=preload',
});
```

4. 在 Nginx 上配置 http2，Nginx 上开启 http2 是比较简单的

**在服务器上实现 http2 成本较高。**

5. 只有在 https 的情况下，才能开启 http2

6. Chrome 拒绝接受一个不安全的 server push

> 通过 chrome://net-internals 查看

7. http2 工具网站：https://http2.akamai.com

## 问答

## 要点

1. 使用 Nginx 启用 http2 的一个好处是自动兼容 http/1.1，对于后端服务使用 http/1.1 即可

2. 代理服务器的好处：协作处理很多服务器不需要考虑的问题。
