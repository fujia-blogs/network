# nginx

1. Nginx 几乎可以说在国内的 HTTP 服务中一家独大，作为前端，你觉得你需要学习掌握 Nginx 的配置么？

## 问答

1. Nginx 的作用是什么？

2. 后端也可以开发 HTTP 服务，为什么还需要 Nginx？

3. Nginx 对于前端的意义是什么？

## 基础

1. Nginx 是非常纯粹的做 http 协议实现的，相比较 node.js，更多是实现业务逻辑。

2. Nginx 是单纯的 web 服务器。

3. 一些 header 字段通过中间代理之后不符合期望，可以追溯下是否被中间代理篡改了，**中间代理可以在 http 协议层面做任意的修改**，如果使用 HTTPS，整个传输过程是加密的，代理就无法修改。

示例：在手机上使用流量浏览网页时，会弹出些广告，这些广告就是中间代理插入的。

4. 为什么服务器要使用 host？

host 是用来区分域名的，Nginx 配置中是根据浏览器传输过来的 http 的 header 的 host 来判断该请求需要被代理到何处。

5. 如果使用代理和 http，整个传输过程是不可靠的

## 缓存

1. 使用 proxy_cache_path 来配置一个 cache

```conf
proxy_cache_path cache levels=1:2 key_zone=my_cache:10m;

# usage
server {
  #...
  location / {
    proxy_cache my_cache;
  }
}
```

- levels：创建二级文件夹
- key_zone：指定缓存名字，缓存在内存中，并指定内存大小。

2. 代理缓存

作用：在代理层做缓存，更高效的对通用内容进行缓存。

3. 代理缓存相关的 header

- s-maxage，专门给代理缓存使用的，如果同时设置了 max-age 和 s-maxage，浏览器使用 max-age，代理缓存使用 s-maxage

- Cache-Control: private，表示只允许浏览器缓存数据
- Cache-Control: no-store，任何结点禁止缓存；

- Vary: 'X-Test-Cache'，指定在发送一个请求时，只有指定的 header 相等时，才使用缓存

4. 使用场景

- 使用了服务器缓存，但是需要根据 User-Agent 返回不同数据，PC 端和移动端获取的数据是不一样的

## HTTPS

1. http 是不安全的，因为它是通文传输的，即在互联网的每一层，都可以将内容解析出来。

2. http 是没有安全属性的

### 加密

1. 私钥

2. 公钥

3. 生成公/私钥

```sh
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```

4. 配置 HTTPS

```conf

server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name test.com;

  return 302 https://$server_name$request_uri;
}

server {
  listen 443;
  server_name test.com;

  ssl on;
  ssl_certificate_key privkey.pem;
  ssl_certificate cert.pem;

  location / {

  }
}
```

- $server_name - 服务器域名；
- $request_uri - 访问的路径。
