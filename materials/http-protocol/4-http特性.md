# http 特性

## cros 跨域请求

1. 请求已经发送，内容也返回了，浏览器在解析返回的内容后，发现跨域了就直接拦截了，**这是浏览器提供的功能。**

2. 跨域允许的方法

- get
- head
- post

3. 允许的 Content-Type:

- text/plain
- multipart/form-data
- application/x-www-form-urlencoded

4. 请求头限制

- 自定义的请求头是不允许的

5. 浏览器根据什么来判断一个请求的返回是允许的呢？

如果要允许自定义的请求头在请求中发送，需要返回一个新的头来告诉浏览器该操作是允许的。

- Access-Control-Allow-Headers: '\*'

6. 设置"Access-Control-Max-Age": "1000"，单位为 s，表示允许跨域的时间

### 预请求

### jsonp

1. 原理：

- 浏览器允许 link、img 和 script 标签的加载内容时，是允许跨域的
