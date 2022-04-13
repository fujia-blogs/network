# cookie & session

## cookie

1. set-cookie 设置，保存在浏览器中，在下一次同域的请求中会带上该 cookie，从而实现用户访问的数据是该用户的

2. cookie 是使用键值对，可以设置多个。

3. 如果没有设置时效，窗口关闭后，cookie 就失效了。

4. 不能跨域的设置 cookie。

5. 在同一个主域名下面，二级域名是可以共享一些 cookie 的。

### cookie 属性

1. max-age 和 expires 设置过期时间

2. secure 表示只在 https 的时候发送。

3. HttpOnly 表示 client 无法通过 document.cookie 访问。这样做的好处是保证安全。

**禁止重要数据通过 js 访问，是保证用户数据安全非常重要的一步。**

## session

1. cookie 不等同 session

2. session 有多种实现方法。

3. 在网站开发中，常用的就是使用 cookie 保存 session。举个例子：把用户登录的 ID 设置到 cookie 中
