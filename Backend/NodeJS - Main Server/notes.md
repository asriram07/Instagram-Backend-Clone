https://chatgpt.com/share/fc02add0-c387-4d05-8849-167d17c5846f

-> Certificates


2. Learn more about CORS certificate sameorigin etc

3. How to know actual ip address of the request
Certainly! Here’s a clearer and more structured version of your explanation:

4. 

When forwarding requests from a Postman client to the login server, and subsequently from the login server to the post server, it is essential to manage the headers correctly to know original client IP. Regardless of the library I have used used—such as HTTP Proxy-Midddleware, Fetch API, or Axios I must set the headers manualkly. 
headers : {
    "X-Client-IP" = req.headers["X-Client-IP"] || req.ip || req.connection.remoteAddress;
}

For example, if a request flows through three servers (A → B → C), when forwarding the request from server A to server B, you should include the client’s IP address. You can obtain this from `request.ip` or `request.connection.remoteAddress`. as shown above

When server B forwards the request to server C, it is crucial to copy all relevant headers from the original request. This includes checking for any specific headers like `X-Client-IP` to determine whether the request is coming directly from the client or through an intermediary server. 

headers : {
    ..req.headers; //copying from the previous reqeust

    "X-Client-IP" = req.headers["X-Client-IP"] || req.ip || req.connection.remoteAddress;
}

By carefully managing the headers and preserving the original client information, you can ensure that the request maintains its integrity throughout the flow.
