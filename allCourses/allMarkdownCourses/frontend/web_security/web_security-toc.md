

<!-- toc -->

- [Web security](#web-security)
  * [Middleware](#middleware)
    + [Django Middleware](#django-middleware)
  * [CORS (Cross-Origin Resource Sharing)](#cors-cross-origin-resource-sharing)
    + [Real example](#real-example)
    + [How to enable CORS](#how-to-enable-cors)
  * [OAuth2](#oauth2)
    + [OAuth2 Authorization Process](#oauth2-authorization-process)
    + [Bearer Token in OAuth2](#bearer-token-in-oauth2)
    + [FastAPI example](#fastapi-example)
  * [JWT (JSON Web Token)](#jwt-json-web-token)
    + [Usage](#usage)

<!-- tocstop -->

# Web security
## Middleware
Introduction to Middleware in Web Development Security

Middleware, in the context of web development security, is a crucial tool that serves as a bridge between the operating system and the applications running on it. It provides a way for developers to manage and control the interactions between different software applications, ensuring that they can communicate and work together effectively. Middleware is particularly important in web development, where it can help to manage the complexities of dealing with multiple different technologies, protocols, and data formats.

The main purpose of middleware in web development security is to provide a layer of protection for your applications. It does this by handling requests and responses between the client and the server, filtering out any potentially harmful data before it can reach your application. This can help to prevent a wide range of security issues, including SQL injection attacks, cross-site scripting (XSS) attacks, and many others.

Core Components of Middleware

1. Request Handling: One of the primary functions of middleware is to handle requests from the client. This involves receiving the request, processing it, and then passing it on to the appropriate application or service. This is where a lot of the security functionality of middleware comes into play, as it can filter out any potentially harmful data in the request before it reaches your application.

2. Response Handling: Similarly, middleware also handles responses from the application or service. This involves processing the response and then sending it back to the client. Again, this is a crucial point for security, as the middleware can ensure that the response does not contain any sensitive data that should not be sent to the client.

3. Logging and Monitoring: Middleware can also provide logging and monitoring functionality. This can be incredibly useful for security purposes, as it allows you to keep track of all the requests and responses that are being handled by your application. This can help you to identify any potential security issues or attacks.

4. Authentication and Authorization: Some middleware tools also provide authentication and authorization functionality. This means that they can handle the process of verifying the identity of users and determining what they are allowed to do. This is a crucial aspect of web development security, as it helps to ensure that only authorized users can access certain parts of your application.

5. Error Handling: Finally, middleware can also handle errors. This can help to ensure that your application continues to run smoothly even when something goes wrong, and it can also provide a more secure way of dealing with errors, as it can prevent potentially sensitive information from being exposed.

In conclusion, middleware is a powerful tool in web development security, providing a range of functionality that can help to protect your applications from a wide variety of potential threats. By understanding the core components of middleware and how they contribute to its overall functionality, you can make more effective use of this tool in your own web development projects.

### Django Middleware
In Django, middleware is a series of hooks into Django's request/response processing. It's a light, low-level plugin system for globally altering Django's input or output. Each middleware component is responsible for doing some specific function. 

Here's how middleware works in Django, in practice:

1. Request Processing: When a request is made to a Django application, before the request reaches the view, it is processed by several middleware classes. These classes can perform a variety of tasks such as authentication, session management, and cross-site request forgery protection.

2. Response Processing: After the view has processed the request and returned a response, this response goes through the same middleware classes but in reverse order. This is where tasks like adding cookies to the response, adding custom headers, or applying GZip compression are performed.

Here are some examples of Django middleware components and what they do:

- AuthenticationMiddleware: This adds the user attribute, representing the currently logged-in user, to every request.

- SessionMiddleware: This manages sessions across requests.

- CsrfViewMiddleware: This provides protection against Cross-Site Request Forgeries.

- SecurityMiddleware: This provides several security enhancements to the request/response process.

- CommonMiddleware: This provides several convenience features, like URL rewriting, appending trailing slashes, and sending 'Content-Length' in responses.

To use a middleware in Django, you need to add it to the MIDDLEWARE setting in your settings.py file. The order of MIDDLEWARE is significant because some middleware depend on other middleware. For example, AuthenticationMiddleware must come after SessionMiddleware.

In conclusion, Django middleware provides a way to add extra processing to the request/response flow, allowing you to add functionality to your Django applications in a reusable and modular way.

## CORS (Cross-Origin Resource Sharing)

Cross-Origin Resource Sharing (CORS) is a crucial web development security tool that allows or restricts web applications to access resources from a server on a different domain. This tool is essential in managing how a web application running on one origin can interact with resources from another origin. 

CORS is a solution to the same-origin policy, a critical security concept in web application development. The same-origin policy restricts web applications from making requests to a different domain than the one it came from. While this policy is crucial for preventing malicious attacks, it can also hinder the legitimate sharing of resources across different domains. CORS provides a secure way to loosen these restrictions when necessary.

Core Components of CORS

1. HTTP Headers: CORS operates primarily through the use of HTTP headers. There are two types of headers involved in CORS: simple response headers and preflight request headers. Simple response headers include 'Access-Control-Allow-Origin' and 'Access-Control-Allow-Credentials'. These headers tell the browser whether a certain domain can access the resource and whether credentials like cookies can be shared. Preflight request headers like 'Access-Control-Request-Method' and 'Access-Control-Request-Headers' are used by the browser to check if the actual request is safe to send.

2. Origin: The origin is the domain that the web application is running on. It is a combination of the scheme (http or https), the host (domain name), and the port. The server checks the origin of the incoming request against its list of allowed origins and decides whether to allow or deny the request based on this.

3. Browser: The browser plays a crucial role in CORS. It automatically sends CORS headers with HTTP requests, and it is the browser that enforces the access restrictions based on the response headers it receives from the server.

4. Server: The server is configured to respond to CORS headers. It checks the origin of the request and responds with the appropriate access control headers. The server can be configured to allow all origins, to allow only specific origins, or to deny all cross-origin requests.

In conclusion, CORS is a powerful tool that allows developers to securely control cross-origin requests, overcoming the limitations of the same-origin policy while still maintaining the security of the web application. By understanding and correctly implementing CORS, developers can create web applications that can safely and effectively share resources across different domains.

### Real example

Imagine you're logged into your online banking website, which is running on the domain `https://yourbank.com`. While still logged in, you navigate to another tab in your browser and visit a different website, say `https://randomwebsite.com`.

Now, suppose `https://randomwebsite.com` is a malicious website and it has some JavaScript code that attempts to make a request to `https://yourbank.com` to transfer money from your account to the attacker's account. This is a cross-origin request because it's a request from `https://randomwebsite.com` (the origin of the request) to `https://yourbank.com` (a different origin).

Without the same-origin policy, the browser would allow this request, and because you're still logged into your bank, the request would be made with your credentials and the transfer would succeed. This type of attack is known as Cross-Site Request Forgery (CSRF).

The same-origin policy is a security measure implemented by browsers to prevent this type of attack. It restricts web applications from making requests to a different domain than the one they came from. So in this case, the same-origin policy would block the request from `https://randomwebsite.com` to `https://yourbank.com`.

However, there are legitimate cases where a web application might need to make a request to a different domain. For example, a web application might need to fetch data from a public API running on a different domain. This is where CORS comes in.

CORS allows servers to specify who can access their resources and how. When a request is made, the server checks the origin of the request and decides whether to allow or deny it based on its CORS policy. If the server allows the request, it includes the `Access-Control-Allow-Origin` header in its response with the value of the allowed origin.

So in our example, `https://yourbank.com` could have a CORS policy that only allows requests from `https://yourbank.com` and denies all other cross-origin requests. This would allow the bank's web application to make requests to the bank's API (because they're the same origin), but it would block the malicious request from `https://randomwebsite.com` (because it's a different origin).

### How to enable CORS

CORS is primarily a server-side security measure. The server is responsible for setting the appropriate CORS headers in its responses to indicate which origins are allowed to access its resources. The browser then enforces these restrictions based on the headers it receives from the server.

On the client side (in this case, your React application), you don't need to do anything specific for CORS. When you make a request to a server from your client-side code, the browser automatically includes an `Origin` header with the request. This header indicates the origin of the client-side application (i.e., the domain where your React application is running).

The server checks this `Origin` header against its list of allowed origins. If the origin is allowed, the server includes an `Access-Control-Allow-Origin` header in its response with the value of the allowed origin. If the origin is not allowed, the server either omits the `Access-Control-Allow-Origin` header or includes it with a value that doesn't match the origin of the request.

When the browser receives the response, it checks the `Access-Control-Allow-Origin` header. If the header is present and its value matches the origin of the client-side application, the browser allows the client-side code to access the response. If the header is not present or its value doesn't match the origin of the client-side application, the browser blocks the client-side code from accessing the response and throws a CORS error.

So, while you don't need to do anything specific for CORS in your client-side code, you do need to ensure that your server is correctly configured to allow requests from your client-side application's origin.

FastAPI has a middleware component for managing CORS. You can add it to your application like this:

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",  # React app address
    # "https://your-other-origins.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}
```

In this example, the `origins` list contains the addresses that are allowed to access your FastAPI server. You can add as many origins as you need. The `allow_credentials`, `allow_methods`, and `allow_headers` parameters are set to allow all credentials, methods, and headers, respectively.

## OAuth2

OAuth2 is a protocol that allows applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, and DigitalOcean. It's specifically designed to work with Hypertext Transfer Protocol (HTTP) and provides authorization flows for web applications, desktop applications, mobile phones, and living room devices. 

OAuth2 primarily solves the problem of insecure sharing of credentials, such as usernames and passwords, by providing a secure and efficient method for users to grant applications access to their information without sharing their credentials. It also provides a way for users to revoke access to their data at any time.

Core Components of OAuth2

1. Client: The client is the application that wants to access the user's account. Before it may do so, it must be authorized by the user, and the authorization must be validated by the API.

2. Resource Owner (User): The resource owner is the user who authorizes an application to access their account. The application's access to the user's account is limited to the "scope" of the authorization granted (e.g., read or write access).

3. Resource Server (API): The resource server hosts the protected user accounts. After the application has obtained an access token, it can use the token to make requests to the resource server to access the user's account.

4. Authorization Server: The authorization server verifies the identity of the user then issues access tokens to the application. 

### OAuth2 Authorization Process

The OAuth2 authorization process involves several steps:

1. The application requests authorization from the user: This is typically done through a user interface, where the application will redirect the user to an authorization server. The user will be presented with a screen that describes the application's request, including the level of access it's asking for and the duration of the access. The user then has the option to approve or deny this request.

2. If the user authorizes the request, the application receives an authorization grant: An authorization grant is a credential representing the user's authorization. It is used by the client to obtain an access token. This grant is expressed in the form of a code (for example, an authorization code or a refresh token), which the application will capture and use in the next step.

3. The application requests an access token from the authorization server by presenting its own credentials and the authorization grant: The application makes a POST request to the authorization server, including its client ID, client secret, and the authorization grant received in the previous step. The client ID and secret are credentials that the application received when it first registered with the authorization server.

4. If the application’s credentials are valid, the authorization server issues an access token: The authorization server validates the client's credentials and the authorization grant. If everything checks out, it issues an access token to the application. This access token is a string representing the authorization granted to the client.

5. The application requests the resource from the resource server and presents the access token for authentication: The application can now use the access token to make requests to the resource server. The access token is included in the header of the HTTP request. 

6. If the access token is valid, the resource server serves the resource to the application: The resource server validates the access token. If it's valid, the server will process the request and return the requested data to the application. If the token is not valid (for example, if it's expired), the server will return an error, and the application will need to obtain a new access token.

This process ensures that user credentials are never shared with the application, and the user can control the level of access the application has to their data. It also allows the user to revoke access at any time.

### Bearer Token in OAuth2

A bearer token is a type of access token. It is called a "bearer" token because it doesn't require the client that sends the token to prove possession of cryptographic key material (proof-of-possession). The bearer token is created by the server, who will accept it in the future again, and treat the request as authorized when the token is included in the Authorization header field.

In the context of OAuth2, after the application (client) has received an access token from the authorization server (as described in the steps above), this access token is often a bearer token. The application can use this bearer token to authenticate itself when making requests to the resource server.

The application includes the bearer token in the Authorization header field of the HTTP request. The format typically looks like this:

```
Authorization: Bearer <token>
```

The resource server will then validate the bearer token and, if it's valid, will process the request.

It's important to note that because bearer tokens do not require proof-of-possession, they should be protected to prevent unauthorized parties from using them. This is typically done by transmitting bearer tokens over HTTPS to ensure they are encrypted during transit.

### FastAPI example
Sure, here's an example of how you might implement OAuth2 with bearer tokens in FastAPI. This example assumes you have a user model and a way to authenticate users and get a user by their username.

First, let's install FastAPI and its security utilities:

```bash
pip install fastapi[all]
```

Now, let's create a new FastAPI application and set up OAuth2 with Password (and hashing) Bearer:

```python
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from typing import Optional
from datetime import datetime, timedelta
from jose import JWTError, jwt

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}

class TokenData(BaseModel):
    username: Optional[str] = None

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return user_dict

def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user["hashed_password"]):
        return False
    return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(fake_users_db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

@app.post("/token", response_model=TokenData)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["username"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me/")
async def read_users_me(current_user: str = Depends(get_current_user)):
    return current_user
```

This code does a lot, so let's break it down:

1. We define some fake users and a `get_user` function to get a user by their username.
2. We define a `verify_password` function to check if a password is correct.
3. We define an `authenticate_user` function to authenticate a user by their username and password.
4. We define a `create_access_token` function to create a new access token.
5. We define a `get_current_user` function to get the current user by their access token.
6. We define a `/token` endpoint that takes a username and password and returns an access token.
7. We define a `/users/me/` endpoint that returns the current user's information.

This is a basic example and doesn't include some things you'd want in a production application, like a real database, error handling, and rate limiting. But it should give you a good starting point for understanding how to use OAuth2 with bearer tokens in FastAPI.


## JWT (JSON Web Token)
JSON Web Tokens, commonly known as JWT, is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

JWT is a powerful tool for developers because it solves the problem of securely transmitting information between parties. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. This makes JWT an essential tool in the development of secure web applications.

In the context of OAuth2, JWT can be used as an access token to prove the authentication of a user and the authorization to access specific resources. When the client application requests an access token from the authorization server (as described in step 3 of the OAuth2 process), the server can return a JWT as the access token.

This JWT will contain claims about the user and the scope of the access granted. The JWT is signed by the authorization server, so the resource server can verify that it is legitimate. When the client application presents the JWT to the resource server (step 5), the server can decode the JWT, verify the signature, and then use the claims inside the JWT to decide whether to process the request.

Core Components of JWT

JWTs consist of three main components: Header, Payload, and Signature.

1. Header: The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. This information is then Base64Url encoded to form the first part of the JWT.

2. Payload: The second part of the token is the payload, which contains the claims or the pieces of information being passed about the user and any additional data. There are different types of claims: registered, public, and private claims. This part is also Base64Url encoded.

3. Signature: To create the signature part, you have to take the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and sign that. This signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

The three parts are separated by dots (.) and together they form a complete JWT.

In summary, JWT is a powerful tool for securely transmitting information between parties in a web development context. Its structure, consisting of a Header, Payload, and Signature, allows for the secure transmission and verification of claims, making it an essential tool for creating secure web applications.

### Usage
JWT can be used both on the client-side and server-side. Here's a simple example to illustrate how JWT works:

Let's say you have a web application with a login system. When a user logs in with their username and password, these credentials are sent to the server. The server then verifies these credentials and creates a JWT with a payload containing the user's ID and perhaps some other basic information. This JWT is then signed by the server with a secret key and sent back to the client.

Here's a simple payload example:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

The server would then encode this JSON object in Base64Url to form the payload part of the JWT. The header might look like this:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

This would also be Base64Url encoded. The server would then create the signature using the encoded header, the encoded payload, and the secret. These three parts together form the complete JWT.

On the client-side, the JWT is typically stored in local storage or a cookie. Whenever the client makes a request to a protected server route, it includes the JWT in the header of the request. The server can then verify the JWT with the secret key. If the verification is successful, the server knows that the client is authenticated, and the request is processed.

So, in this example, the JWT is created on the server-side but stored and sent with each request from the client-side. The server-side is responsible for verifying the JWT and processing the request accordingly.

