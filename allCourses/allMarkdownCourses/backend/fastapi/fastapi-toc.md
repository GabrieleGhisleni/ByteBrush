

<!-- toc -->

- [Fast API](#fast-api)
  * [Introduction to FastAPI](#introduction-to-fastapi)
  * [Main decorators](#main-decorators)
    + [Advance decorators and lifecycle events](#advance-decorators-and-lifecycle-events)
  * [Path Parameters and Query Strings](#path-parameters-and-query-strings)
    + [Determining params](#determining-params)
    + [Nested params](#nested-params)
  * [Pydantic Models in Fast API](#pydantic-models-in-fast-api)
    + [Automatic Validation](#automatic-validation)
    + [Query string with Pydantic](#query-string-with-pydantic)
    + [Request Bodies](#request-bodies)
  * [Dependency Injection in FastAPI](#dependency-injection-in-fastapi)
    + [Advantages of injection](#advantages-of-injection)
    + [SQLite integration example](#sqlite-integration-example)
  * [Asynchronous Request Handling in FastAPI](#asynchronous-request-handling-in-fastapi)
    + [SQlite Async example](#sqlite-async-example)
  * [Errors handling](#errors-handling)
    + [Errors handling as decorators](#errors-handling-as-decorators)
  * [Testing](#testing)
    + [Parametrizing more routes](#parametrizing-more-routes)
    + [Dependency injection overwriting](#dependency-injection-overwriting)
  * [Deploy](#deploy)
  * [Automatic API Documentation in FastAPI](#automatic-api-documentation-in-fastapi)
  * [Serve React trough static files](#serve-react-trough-static-files)

<!-- tocstop -->

# Fast API

## Introduction to FastAPI

FastAPI is a modern, fast, web-based framework for building APIs with Python 3.6+ based on standard Python type hints.
It is designed to be easy to use, while also enabling high performance. The main purpose of FastAPI is to allow
developers to quickly create robust APIs with minimal code that are also highly efficient and scalable.

FastAPI solves several problems in software development. It reduces the time and complexity involved in creating APIs by
providing a simple, intuitive interface. It also automatically generates interactive API documentation, which simplifies
the process of testing and debugging. FastAPI also supports asynchronous request handling, which can significantly
improve the performance of your applications.

Core Components of FastAPI

1. Pydantic Models: Pydantic models are one of the core components of FastAPI. They are used to define the data
   structures for requests and responses. This allows FastAPI to automatically validate incoming requests, serialize and
   deserialize data, and generate informative error messages when data is invalid.

2. Path Parameters and Query Strings: FastAPI allows you to define path parameters and query strings to handle different
   types of requests. Path parameters are used to identify specific resources, while query strings can be used to
   filter, sort, or provide additional information about a request.

3. Request Bodies: FastAPI also allows you to define request bodies using Pydantic models. This is useful for handling
   more complex requests, such as creating or updating resources.

4. Dependency Injection: FastAPI provides a powerful dependency injection system. This allows you to manage and share
   resources across your application, such as database connections or configuration settings. It also makes it easier to
   test your application by replacing dependencies with mock objects.

5. Authentication and Authorization: FastAPI provides built-in support for authentication and authorization, including
   support for OAuth2. This allows you to secure your API and control access to your resources.

6. Automatic API Documentation: FastAPI automatically generates interactive API documentation using tools like Swagger
   UI and ReDoc. This makes it easy to test your API and understand how it works.

7. Asynchronous Request Handling: FastAPI supports asynchronous request handling using Python's async and await
   keywords. This allows your application to handle more requests simultaneously, which can significantly improve
   performance.

FastAPI is a powerful tool for building APIs in Python. It provides a simple, intuitive interface, while also offering
advanced features like automatic validation, serialization, dependency injection, and asynchronous request handling.
Whether you're a beginner or an experienced developer, FastAPI can help you create robust, efficient APIs quickly and
easily.

## Main decorators

FastAPI provides several decorators to define the HTTP methods that your application will use. These decorators are used
to annotate your function and inform FastAPI about the operation of that function. Here are some of the main ones:

1. `@app.get()`: This decorator is used to define a route that should respond to GET requests. The GET method requests a
   representation of the specified resource. In the context of REST APIs, this is typically used for read-only
   operations.

2. `@app.post()`: This decorator is used to define a route that should respond to POST requests. The POST method is used
   to submit an entity to the specified resource, often causing a change in state or side effects on the server. In the
   context of REST APIs, this is typically used for creating new resources.

3. `@app.put()`: This decorator is used to define a route that should respond to PUT requests. The PUT method replaces
   all current representations of the target resource with the request payload. In the context of REST APIs, this is
   typically used for updating existing resources.

4. `@app.delete()`: This decorator is used to define a route that should respond to DELETE requests. The DELETE method
   deletes the specified resource. In the context of REST APIs, this is typically used for deleting resources.

5. `@app.patch()`: This decorator is used to define a route that should respond to PATCH requests. The PATCH method is
   used to apply partial modifications to a resource. In the context of REST APIs, this is typically used for updating
   parts of existing resources.

6. `@app.options()`: This decorator is used to define a route that should respond to OPTIONS requests. The OPTIONS
   method is used to describe the communication options for the target resource.

7. `@app.head()`: This decorator is used to define a route that should respond to HEAD requests. The HEAD method asks
   for a response identical to that of a GET request, but without the response body.

Each of these decorators takes as a first argument the path where the operation will be performed. The function
decorated will be called whenever a request is made to that path using the corresponding HTTP method.

### Advance decorators and lifecycle events

FastAPI provides several other decorators that can be used to enhance the functionality of your API. Here are some of
them:

1. `@app.middleware("http")`: This decorator is used to define middleware. Middleware is a function that works with
   every request before it is processed by any specific path operation. It can also modify the response after the path
   operation is processed. It's useful for tasks like processing data, handling exceptions, or managing
   requests/responses.

2. `@app.exception_handler(Exception)`: This decorator is used to create a custom exception handler. The function
   decorated with this will be called whenever the specified exception is raised. This allows you to handle exceptions
   in a way that's specific to your application.

3. `@app.on_event("startup")` and `@app.on_event("shutdown")`: These decorators are used to define startup and shutdown
   events. Functions decorated with these will run before FastAPI fully starts up and before it completely shuts down.
   These are useful for tasks like setting up database connections or closing down connections or files.

4. `@app.websocket("/ws")`: This decorator is used to define a WebSocket route. WebSockets allow for bidirectional
   communication between the client and the server, making them useful for tasks that require real-time updates.

5. `@app.get("/{item_id}", response_model=Item)`: This decorator is used to define the model for the response. FastAPI
   uses Pydantic models to handle request and response data. By specifying a response model, you can ensure that the
   data returned by your API matches a specific format.

6. `@app.get("/items/{item_id}", tags=["items"])`: This decorator is used to group routes by tags. This is useful when
   you have a large number of routes and want to group them in a way that makes sense for your application.

Remember, these decorators are used to annotate your function and inform FastAPI about the operation of that function.
They provide a declarative way of defining your API's behavior.

## Path Parameters and Query Strings

Path parameters and query strings are two ways of passing information from the client to the server in a HTTP request.
They are used to specify the resource that the client wants to interact with or to provide additional information about
the request.

1. Path Parameters: Path parameters are part of the URL that is used to identify a specific resource. For example, in
   the URL "http://example.com/items/5", "5" is a path parameter that identifies the item with the ID 5. In FastAPI, you
   can define path parameters by placing the parameter name inside curly braces {} in the route decorator.

2. Query Strings: Query strings are part of the URL that comes after the "?" symbol. They are used to provide additional
   information about the request, such as filters, sorting options, or other parameters. For example, in the
   URL "http://example.com/items?page=2", "page=2" is a query string that tells the server to return the second page of
   items. In FastAPI, you can define query strings by adding parameters to your route functions.

Here is an example of how to use path parameters and query strings in FastAPI:

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}
```

In this example, "item_id" is a path parameter and "q" is a query string. When you make a GET request to "
/items/5?q=test", FastAPI will call the function "read_item" with "item_id" set to 5 and "q" set to "test". If the "q"
parameter is not provided in the URL, it will default to None.

### Determining params

FastAPI determines whether a parameter should be a path parameter or a query string based on the following rules:

1. If the parameter is also a function path operation parameter, it will be used as a path parameter: In FastAPI, when
   you declare a function parameter in the path of your route decorator (the string that determines the URL of the
   route), FastAPI understands it as a path parameter. For example, in `@app.get("/items/{item_id}")`, `item_id` is a
   path parameter. When you call this function, the value for `item_id` must be provided in the URL, like `/items/5`.

2. If the parameter is of a singular type (like int, float, str, bool, etc.) it will be interpreted as a query
   parameter: FastAPI treats function parameters that have a singular type and are not part of the path as query
   parameters. For example, in the function `async def read_item(item_id: int, q: str = None)`, `q` is a query
   parameter. This means that the value for `q` can be provided in the URL after a `?`, like `/items/5?q=test`. If a
   value for `q` is not provided in the URL, it will default to `None`.

3. If the parameter is declared in the function path operation but not as a function parameter, it will be interpreted
   as a "request body": In FastAPI, if you declare a function parameter that is not part of the path and is not a
   singular type (it's a Pydantic model, for example), FastAPI will interpret it as a request body. This means that the
   data for this parameter should be provided in the body of the request, usually in JSON format. For example:

```python
from pydantic import BaseModel
from fastapi import FastAPI


class Item(BaseModel):
    name: str
    description: str = None
    price: float


app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
    return item
```

In this example, `item` is a request body. When you call this function, you need to provide the data for `item` in the
body of the request, like `{"name": "Foo", "price": 42.0}`.

### Nested params

FastAPI allows you to define nested paths using Python classes, which can make your routes more organized and easier to
manage.

Example:

```python
@app.get("/users/{user_id}/items/{item_id}")
async def read_user_item(user_id: int, item_id: str):
    return {"user_id": user_id, "item_id": item_id}
```

## Pydantic Models in Fast API

Pydantic models play a crucial role in FastAPI. They are essentially Python classes that inherit from the `BaseModel`
class provided by Pydantic. These models are used to define the structure of the data that your API will receive and
send.

The main advantage of using Pydantic models is that they allow automatic data validation, serialization, and
documentation. This means that FastAPI will automatically check if the incoming request data is of the correct type,
convert it into Python data types, and generate an OpenAPI schema for it.

Here's how you can define a Pydantic model:

```python
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: str = None
    price: float
    is_offer: bool = None
```

In this example, an `Item` is defined with the following attributes: `name`, `description`, `price`, and `is_offer`. The
type hints (e.g., `str`, `float`, `bool`) tell FastAPI what data type each attribute should be. The `= None` indicates
that these fields are optional.

You can use this model in your FastAPI route as follows:

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str = None
    price: float
    is_offer: bool = None


@app.post("/items/")
async def create_item(item: Item):
    return item
```

In the `create_item` function, FastAPI will expect a JSON body in the request that matches the structure of the `Item`
model. It will automatically validate the data, convert it into an `Item` instance, and return it as JSON. If the data
is invalid, FastAPI will return a helpful error message.

### Automatic Validation

To call the `create_item` API, you can use the `requests` library in Python. Here's an example:

```python
import requests
import json

url = "http://localhost:8000/items/"
data = {
    "name": "Foo",
    "description": "A very nice Item",
    "is_offer": True
}

response = requests.post(url, data=json.dumps(data))

print(response.status_code)
print(response.json())
```

In this example, we're sending a POST request to the `/items/` endpoint with a JSON body. The `json.dumps()` function is
used to convert the Python dictionary into a JSON string.

If you run this code, you'll get a 422 Unprocessable Entity response from FastAPI. This is because the `price` field is
missing from the request data, and this field is required according to the `Item` model.

The response body will look something like this:

```json
{
  "detail": [
    {
      "loc": [
        "body",
        "price"
      ],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

This error message is automatically generated by FastAPI. It tells you that the `price` field is missing from the
request body. The `loc` field shows the location of the error, and the `msg` field provides a human-readable error
message. This makes it easy to identify and fix the problem.

### Query string with Pydantic

Yes, you can use Pydantic models to define query parameters in FastAPI. However, it's important to note that when you
use a Pydantic model for query parameters, all the fields in the model become optional.

Here's an example:

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class ItemQueryParams(BaseModel):
    name: str = None
    description: str = None
    price: float = None
    is_offer: bool = None


@app.get("/items/")
async def read_items(query: ItemQueryParams):
    return query.dict()
```

In this example, the `read_items` function will accept any combination of the fields defined in the `ItemQueryParams`
model as query parameters. If a field is not provided in the query string, its value will be `None`.

You can call this API like this: `http://localhost:8000/items/?name=Foo&price=100`.

This will return a JSON response like this:

```json
{
  "name": "Foo",
  "description": null,
  "price": 100.0,
  "is_offer": null
}
```

As you can see, the fields that were not provided in the query string are set to `null` in the response.

### Request Bodies

In FastAPI, a request body is the data sent by the client to your API. A request body is typically used with HTTP
methods like POST and PUT where the client needs to send data to the server, such as the details of a new item to be
created or data to be updated.

FastAPI uses Pydantic models to define and handle request bodies. Pydantic models provide a way to define data
structures with type annotations, which FastAPI uses to:

1. Read the body of the request.
2. Convert the incoming JSON data to the corresponding Python types.
3. Validate the data.
4. Respond with an error if the data is invalid.
5. Document the structure of the data automatically in JSON Schema.
6. Provide automatic API documentation.

Example:

Let's say we are building an API for a blog and we want to create an endpoint to create a new blog post. We would first
define a Pydantic model for the blog post data structure:

```python
from pydantic import BaseModel


class BlogPost(BaseModel):
    title: str
    content: str
    published: bool
```

In this model, `title` and `content` are required fields (since they don't have default values), and `published` is an
optional field with a default value of `None`.

Next, we would create a new route in our FastAPI application to handle POST requests and use the `BlogPost` model as the
type of the input parameter:

```python
from fastapi import FastAPI

app = FastAPI()


@app.post("/posts/")
async def create_post(post: BlogPost):
    # Your code to save the blog post goes here
    return {"title": post.title, "content": post.content, "published": post.published}
```

In this route, FastAPI will:

1. Read the body of the request as JSON.
2. Convert the JSON data into a `BlogPost` model instance.
3. Validate the data based on the `BlogPost` model definition.
4. Give you the `post` parameter with the validated data.
5. If the request data is invalid, it will return a 422 Unprocessable Entity response with a detailed error message.

## Dependency Injection in FastAPI

Dependency Injection is a design pattern that allows a piece of code (the dependency) to be injected into another piece
of code, which depends on it. This makes the code easier to manage, test, and reuse. FastAPI provides a powerful and
easy-to-use system for dependency injection.

In FastAPI, dependencies are functions that return a value. These functions can be included in the path operation
functions (like your API route handlers) and FastAPI will know to call them for each request that uses them.

Dependencies in FastAPI can be used for a variety of purposes, such as:

- Sharing code: You can create a dependency function that performs a common task and use it in multiple path operation
  functions.
- Sharing resources: If you have a resource that should be shared across multiple requests (like a database connection),
  you can manage it in a dependency.
- Managing configurations: You can use dependencies to manage your application's configurations, making them available
  where needed.
- Handling authentication: You can use dependencies to handle authentication, ensuring that the user is logged in before
  they can access certain routes.

Example of Dependency Injection in FastAPI

Let's create a simple example where we use a dependency to manage a database connection. We'll use a simple in-memory
dictionary as our "database" for simplicity.

```python
from fastapi import Depends, FastAPI

app = FastAPI()

# This is our "database"
database = {}


# This is our dependency
def get_db():
    return database


@app.get("/items/{item_id}")
def read_item(item_id: str, db: dict = Depends(get_db)):
    return db.get(item_id)


@app.post("/items/{item_id}")
def create_item(item_id: str, db: dict = Depends(get_db)):
    db[item_id] = {"item_id": item_id}
    return db[item_id]
```

In this example, `get_db` is our dependency. It's a function that returns our "database". We include it in our path
operation functions `read_item` and `create_item` using the `Depends` function. FastAPI will automatically call `get_db`
for each request to these routes, and pass the returned value (our "database") as the `db` parameter.

This way, we can easily share our "database" across multiple requests, and if we ever need to change how our database is
accessed, we only need to update the `get_db` function.

### Advantages of injection

Here's why using dependency injection can be beneficial:

1. **Testability**: With dependency injection, you can easily replace your dependencies with mock objects in your tests.
   This makes your tests more reliable and easier to write. For example, you could replace `get_db` with a function that
   returns a mock database for your tests.

2. **Decoupling**: By using dependency injection, you're reducing the coupling between your route handlers and the `db`
   object. This makes your code more modular and easier to change. If you ever need to change how you access your
   database, you only need to update the `get_db` function.

3. **Concurrency**: FastAPI is built to be asynchronous and to handle multiple requests concurrently. If you use a
   global `db` object like in your example, you might run into issues where one request modifies `db` while another
   request is reading from it. With dependency injection, each request gets its own independent `db` object (
   assuming `get_db` creates a new object for each request), avoiding these issues.

4. **Request-specific data**: Sometimes, your dependencies might need to use data that's specific to the current
   request (like the current user's ID). With dependency injection, your dependencies can depend on other dependencies,
   including FastAPI's built-in dependencies that provide request-specific data.

In summary, while you can use a global `db` object like in your example, using FastAPI's dependency injection system can
make your code more robust, easier to test, and more flexible.

### SQLite integration example

example using FastAPI and SQLAlchemy, a popular SQL toolkit and Object-Relational Mapping (ORM) system for Python. In
this example, we'll create a simple API for managing users.

First, we'll need to install SQLAlchemy and a database driver. For SQLite, you can install them with:

```bash
pip install sqlalchemy async-exit-stack async-generator
```

Next, let's define our SQLAlchemy models and a function to get a database session:

```python
from sqlalchemy import Boolean, Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session, sessionmaker
from fastapi import Depends, FastAPI

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    is_active = Column(Boolean, default=True)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

In this code, `get_db` is our dependency. It's a generator that creates a new SQLAlchemy session, yields it, and then
closes it after the request is finished.

Now, let's create some routes to create and read users:

```python
app = FastAPI()


@app.post("/users/")
def create_user(user: User, db: Session = Depends(get_db)):
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@app.get("/users/{user_id}")
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    return user
```

In these routes, we're using our `get_db` dependency to get a database session. FastAPI will automatically call `get_db`
for each request to these routes, and pass the returned session as the `db` parameter.

This way, we can easily manage our database sessions, and if we ever need to change how we access the database, we only
need to update the `get_db` function.

## Asynchronous Request Handling in FastAPI

Asynchronous request handling is a feature in FastAPI that allows your application to handle multiple requests
simultaneously. This is achieved using Python's async and await keywords, which are used to define and work with
asynchronous code.

In a traditional synchronous application, the server processes requests one at a time. If a request takes a long time to
process (for example, because it involves a slow database query or a call to an external API), the server will be
blocked and unable to handle any other requests until the slow request is finished.

In an asynchronous application, on the other hand, the server can start processing a slow request, then "pause" it and
work on other requests while waiting for the slow request to finish. This can significantly improve the performance of
your application, especially when handling many slow requests.

### SQlite Async example

To use SQLite with FastAPI in an asynchronous manner, you would need an asynchronous database package. One such package
is `databases` which provides async support for a number of DBMS including SQLite.

First, install the necessary packages:

```bash
pip install databases[sqlite] uvicorn sqlalchemy
```

Here's an example of how you might define an asynchronous route in FastAPI that interacts with a SQLite database:

```python
from fastapi import FastAPI
from databases import Database
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

DATABASE_URL = "sqlite:///./test.db"

database = Database(DATABASE_URL)

metadata = MetaData()

users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String(50)),
    Column("email", String(50)),
)

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)

app = FastAPI()


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.get("/users/{user_id}")
async def read_user(user_id: int):
    query = users.select().where(users.c.id == user_id)
    user = await database.fetch_one(query)
    return user
```

In this example, we first define a `users` table using SQLAlchemy. We then create a FastAPI application and define two
event handlers: one to connect to the database when the application starts, and one to disconnect from the database when
the application shuts down.

The `read_user` function is an asynchronous route that queries the `users` table. We use the `await` keyword to "pause"
the function while waiting for the database query to finish. While the function is paused, FastAPI can start processing
other requests. Once the database query is finished, FastAPI will "resume" the function and send the response.

## Errors handling

Error handling is a crucial aspect of any application. FastAPI provides several tools to handle errors effectively and
efficiently.

In FastAPI, you can handle errors using HTTPException. HTTPException is a special exception class that you can raise to
return HTTP error responses. When you raise an HTTPException, FastAPI will stop the request handling process, and send
the HTTP error response that you defined in the exception.

Here's a simple example:

```python
from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get("/items/{item_id}")
async def read_item(item_id: str):
    if item_id not in database:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item": database[item_id]}
```

In this example, if the requested item is not in the database, FastAPI will return a 404 error with the detail "Item not
found".

### Errors handling as decorators

FastAPI also allows you to create custom exception handlers. This is useful if you want to handle specific exceptions in
a certain way. Here's an example:

```python
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse


@app.exception_handler(ZeroDivisionError)
async def zero_division_handler(request: Request, exc: ZeroDivisionError):
    return JSONResponse(
        status_code=400,
        content={"message": "Zero Division Error: Do not divide by zero!"},
    )


@app.get("/divide/{num1}/{num2}")
async def divide(num1: int, num2: int):
    return {"result": num1 / num2}
```

In this example, if a ZeroDivisionError is raised when trying to divide two numbers, FastAPI will return a 400 error
with a custom message.

These are just a few examples of how you can handle errors in FastAPI. By using HTTPException and custom exception
handlers, you can ensure that your application handles errors gracefully and provides useful feedback to the client.

## Testing

Testing is a crucial part of software development, and FastAPI makes it easy to write tests for your application. The
most common tool for testing Python applications is Pytest, a powerful and flexible testing framework.

Here's a basic example of how you might write tests for a FastAPI application. Let's assume you have a simple
application in a file called `main.py`:

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}
```

You could write tests for this application in a separate file, let's call it `test_main.py`:

```python
from fastapi.testclient import TestClient
import main

client = TestClient(main.app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}
```

In this test, we're using FastAPI's `TestClient` to send a GET request to the root of our application. We then assert
that the response status code is 200 (indicating success), and that the JSON response body matches what we expect.

### Parametrizing more routes

Pytest's `parametrize` feature allows you to run a test function multiple times with different sets of arguments. This
can be very useful for testing a function with a variety of inputs.

Here's an example of how you might use `parametrize` in a FastAPI test:

```python
import pytest
from fastapi.testclient import TestClient
import main

client = TestClient(main.app)


@pytest.mark.parametrize(
    "path, expected_status", [("/", 200), ("/nonexistent", 404)]
)
def test_read_path(path, expected_status):
    response = client.get(path)
    assert response.status_code == expected_status
```

In this example, `test_read_path` will be run twice: once with `path="/" and `expected_status=200`, and once with `
path="/nonexistent"` and `expected_status=404`.

### Dependency injection overwriting

As for dependency injection, FastAPI provides a feature called dependency overrides. This allows you to replace a
dependency with a different function during testing. Here's an example:

```python
from fastapi import FastAPI, Depends

app = FastAPI()


def get_db():
    return {"foo": "bar"}


@app.get("/")
def read_root(db=Depends(get_db)):
    return db
```

In this example, `get_db` is a dependency that returns a dictionary. The `read_root` path operation depends on `get_db`.

You could override `get_db` during testing like this:

```python
from fastapi.testclient import TestClient
import main

client = TestClient(main.app)


def override_get_db():
    return {"foo": "baz"}


main.app.dependency_overrides[main.get_db] = override_get_db


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"foo": "baz"}
```

In this test, `override_get_db` is used instead of `get_db`, so the response is `{"foo": "baz"}` instead
of `{"foo": "bar"}`.

## Deploy

Deploying FastAPI applications can be done in several ways, both locally and in production. Here's a simple guide on how
to do it:

**Local Deployment**

1. **Install FastAPI**: You can install FastAPI by running the following command in your terminal:

```sh
   pip install fastapi
```

2. **Install Uvicorn**: Uvicorn is an ASGI server that you'll need to run your FastAPI application. Install it by
   running:

```sh
   pip install uvicorn
```

3. **Create a FastAPI application**: Create a new Python file (e.g., `main.py`) and add the following code to create a
   simple FastAPI application:

```python
   from fastapi import FastAPI

   app = FastAPI()


   @app.get("/")
   def read_root():
    return {"Hello": "World"}
 ```

4. **Run the application**: You can run your FastAPI application using Uvicorn with the following command:

```sh
   uvicorn main:app --reload
```

This command tells Uvicorn to run your application (`main:app`) and to automatically reload the server whenever a
change is detected (`--reload`).

**Production Deployment**

For production, you can use a WSGI server like Gunicorn in combination with Uvicorn. Here's a simple guide on how to do
it:

1. **Install Gunicorn**: You can install Gunicorn by running the following command in your terminal:

```sh
   pip install gunicorn
```

2. **Run the application**: You can run your FastAPI application using Gunicorn and Uvicorn with the following command:

```sh
   gunicorn -k uvicorn.workers.UvicornWorker main:app
```

This command tells Gunicorn to run your application (`main:app`) using the Uvicorn
worker (`-k uvicorn.workers.UvicornWorker`).

Remember to replace `main:app` with the actual location of your FastAPI application.

For more advanced production deployments, you might want to consider using Docker, Kubernetes, or a cloud provider like
AWS, Google Cloud, or Azure. These platforms provide additional features like load balancing, automatic scaling, and
more.

## Automatic API Documentation in FastAPI

FastAPI's automatic API documentation is one of its most powerful features. It uses the OpenAPI standard (formerly known
as Swagger) for API documentation. This means that FastAPI can automatically generate a JSON schema for your API, which
can be used to create interactive documentation.

The interactive documentation allows users to explore all the routes, parameters, and bodies of requests. It also allows
users to try out different requests and see the responses directly in the browser. This makes it a very useful tool for
both developing and testing your API.

FastAPI uses two different tools for generating interactive documentation:

1. Swagger UI: This is the default tool for generating interactive documentation in FastAPI. It provides a user-friendly
   interface where you can explore and test your API.

2. ReDoc: This is an alternative tool for generating interactive documentation. It provides a more modern, clean
   interface compared to Swagger UI.

To access the automatic documentation, you simply need to run your FastAPI application and go to the "/docs" endpoint
for Swagger UI, or the "/redoc" endpoint for ReDoc.

## Serve React trough static files

FastAPI can serve static files, such as those generated by a React application, using the `StaticFiles` function. Here's
a step-by-step guide on how to do it:

1. **Build your React application**: Run `npm run build` in your React application directory. This will create a `build`
   directory with static files for your React application.

2. **Install FastAPI and Uvicorn**: If you haven't done so already, install FastAPI and Uvicorn by running the following
   commands in your terminal:

```sh
   pip install fastapi
   pip install uvicorn
```

3. **Create a FastAPI application**: Create a new Python file (e.g., `main.py`) and add the following code to create a
   FastAPI application that serves static files:

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory="path_to_your_react_app/build", html=True), name="ReactApp")


@app.get("/api")
def read_api():
    return {"Hello": "World from FastAPI"}
```

Replace `"path_to_your_react_app/build"` with the actual path to the `build` directory of your React application.

4. **Run the application**: You can run your FastAPI application using Uvicorn with the following command:

```sh
   uvicorn main:app --reload
```

This command tells Uvicorn to run your application (`main:app`) and to automatically reload the server whenever a
change is detected (`--reload`).

Now, if you navigate to `http://localhost:8000` in your web browser, you should see your React application being served
by FastAPI.

Please let me know if you have any questions or if there's anything else you'd like to learn.
