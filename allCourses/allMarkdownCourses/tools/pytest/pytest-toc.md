

<!-- toc -->

- [Pytest](#pytest)
  * [Introduction](#introduction)
  * [Test Discovery](#test-discovery)
  * [Fixtures](#fixtures)
    + [Fixture Scope](#fixture-scope)
  * [Parametrization](#parametrization)
  * [Markers](#markers)
    + [mark.usefixtures vs fixture](#markusefixtures-vs-fixture)
  * [Mocking](#mocking)
    + [Advance usage](#advance-usage)
    + [Mock functions in dataclasses](#mock-functions-in-dataclasses)
    + [Mocking and parametrization](#mocking-and-parametrization)
  * [Detailed Reports](#detailed-reports)
  * [Configuration and cli options](#configuration-and-cli-options)
    + [Cli options](#cli-options)
    + [`pytest.ini`](#pytestini)
    + [conftest.py](#conftestpy)
  * [Plugins](#plugins)

<!-- tocstop -->

# Pytest

## Introduction

Pytest is a powerful, feature-rich testing framework for Python that allows developers to write simple, scalable tests
quickly. It is designed to make the process of writing and running tests as easy and straightforward as possible. Pytest
is used to write both small, unit tests and larger, functional tests. It is a popular choice among developers due to its
simplicity, ease of use, and ability to handle complex testing needs.

The main purpose of Pytest is to provide a robust, flexible framework for testing Python applications. It solves several
problems in software development, such as reducing the time and effort required to write tests, making tests more
readable and maintainable, and providing detailed, informative reports on test results.

CORE COMPONENTS

1. Test Discovery: Pytest automatically discovers and runs tests written in Python files that start with `test_` or end
   with `_test`. This feature simplifies the testing process by eliminating the need to manually identify and run each
   test.

2. Assert Statements: Pytest uses plain `assert` statements, making tests more readable and easier to write. It provides
   detailed information when an assertion fails, helping developers quickly identify and fix problems.

3. Fixtures: Pytest fixtures are functions that are run before each test function to which they are applied. They are
   used to set up and tear down test environments, making tests more reliable and reusable. Fixtures can also be used to
   share data or state between tests.

4. Parametrization: Pytest allows for parametrization of tests, meaning you can run a test function multiple times with
   different input values. This feature reduces code duplication and makes tests more efficient and comprehensive.

5. Plugins: Pytest supports a wide range of plugins that extend its functionality. Plugins can be used to integrate
   Pytest with other tools, add new features, or customize the testing process.

6. Markers: Pytest markers are a way of categorizing tests. They can be used to skip certain tests, run only a subset of
   tests, or add metadata to tests.

7. Detailed Reports: Pytest provides detailed reports on test results, including information on which tests passed,
   which failed, and why they failed. These reports make it easier to diagnose and fix problems.

## Test Discovery

Test Discovery is one of the most useful features of Pytest. It automatically identifies and collects tests so you don't
have to manually list them out. This feature is particularly useful in large projects with hundreds or even thousands of
tests.

Pytest follows a simple rule to auto-discover tests: any file that is either prefixed with `test_` or suffixed
with `_test` is considered a test file. Inside these files, any function prefixed with `test_` is considered a test
function. Pytest will automatically discover these test functions and run them.

Let's consider a simple project structure:

```
project/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│
├── tests/
│   ├── __init__.py
│   ├── test_main.py
```

In this structure, `test_main.py` is a test file because it starts with `test_`. Pytest will automatically discover this
file when it runs.

Inside `test_main.py`, you might have something like this:

```python
def test_addition():
    assert 1 + 1 == 2


def test_subtraction():
    assert 3 - 2 == 1
```

Here, `test_addition` and `test_subtraction` are test functions because they are prefixed with `test_`. Pytest will
automatically discover and run these tests.

To run the tests, you would navigate to the project directory in your terminal and simply run `pytest`:

```bash
$ cd project
$ pytest
```

Pytest will then automatically discover and run all tests in the `tests/` directory. This feature makes it easy to
manage and run tests, even in large projects with complex structures.

## Fixtures

Fixtures in Pytest are a powerful feature for setting up and tearing down code. They are used to provide a fixed
baseline upon which tests can reliably and repeatedly execute. Fixtures help to make tests simpler, more modular, and
more scalable.

A fixture is a function that is defined using the `@pytest.fixture` decorator. This function can then be passed as an
argument to test functions, and Pytest will automatically call it and provide its return value as an argument to the
test.

Here's a simple example of a fixture:

```python
import pytest


@pytest.fixture
def simple_fixture():
    return "Hello, World!"


def test_simple_fixture(simple_fixture):
    assert simple_fixture == "Hello, World!"
```

In this example, `simple_fixture` is a fixture that returns the string "Hello, World!". The `test_simple_fixture`
function takes this fixture as an argument, and Pytest automatically calls the `simple_fixture` function and provides
its return value as an argument to the test.

Fixtures are particularly useful when there is code that needs to be run before and after a test, or when multiple tests
need to use the same setup code. For example, if you're testing a database application, you might have a fixture that
sets up a test database before each test and tears it down after each test.

### Fixture Scope

Fixture Scope:

By default, Pytest fixtures have a scope of "function", meaning they are created and destroyed for each test function.
However, you can change the scope of a fixture to "class", "module", or "session" using the `scope` parameter of
the `@pytest.fixture` decorator.

- "function" scope: The fixture is created and destroyed for each test function (default).
- "class" scope: The fixture is created and destroyed for each test class.
- "module" scope: The fixture is created and destroyed for each Python module.
- "session" scope: The fixture is created once for the entire test session.

Here's an example of a fixture with a "session" scope:

```python
import pytest


@pytest.fixture(scope="session")
def session_fixture():
    print("Setting up session fixture")
    yield "Session Data"
    print("Tearing down session fixture")


def test_session_fixture(session_fixture):
    assert session_fixture == "Session Data"
```

In this example, the `session_fixture` fixture is set up once for the entire test session, not for each test function.
The `yield` keyword is used to provide a value for the fixture and to separate setup code (before the `yield`) from
teardown code (after the `yield`).

## Parametrization

Parametrization in Pytest is a powerful feature that allows you to run a test function multiple times with different
sets of input data. This is particularly useful when you want to test a function under various scenarios but don't want
to write a separate test case for each one.

Let's start with a simple example. Suppose you have a function that checks if a number is even:

```python
def is_even(n):
    return n % 2 == 0
```

You want to test this function with a set of different inputs. Instead of writing a separate test function for each
input, you can use Pytest's parametrization feature:

```python
import pytest


@pytest.mark.parametrize("test_input,expected", [(2, True), (3, False), (8, True), (15, False), (0, True)])
def test_is_even(test_input, expected):
    assert is_even(test_input) == expected
```

In this example, `@pytest.mark.parametrize` is a decorator that tells Pytest to run the `test_is_even` function multiple
times with different sets of inputs. The first argument to `parametrize` is a string containing comma-separated variable
names ("test_input,expected"), and the second argument is a list of tuples, each containing a set of values for those
variables.

Pytest will run the `test_is_even` function five times, once for each tuple in the list. Each time it runs the function,
it will pass the values from the tuple as arguments to the function. For example, the first time it runs the function,
it will pass the values 2 and True as arguments. The second time it runs the function, it will pass the values 3 and
False as arguments, and so on.

## Markers

Markers in Pytest are a way of categorizing or adding metadata to your tests. They can be used to skip tests, run only a
subset of tests, or mark tests as expected to fail.

Pytest comes with several built-in markers. Here are some of the most commonly used ones:

1. `@pytest.mark.skip`: This marker is used to skip a test completely. It's useful when you have a test that you know
   will not pass or is not relevant in a certain context.

   Example:

```python
    @pytest.mark.skip(reason="Incomplete test")
def test_skip():
    pass
```

2. `@pytest.mark.skipif`: This marker is used to skip a test based on a certain condition.

   Example:

```python
    @pytest.mark.skipif(sys.version_info < (3, 7), reason="Requires Python 3.7 or higher")
def test_skipif():
    pass
```

3. `@pytest.mark.xfail`: This marker is used to indicate that a test is expected to fail. The test will still be run,
   but its failure will not cause the entire test session to fail.

   Example:

```python
    @pytest.mark.xfail(reason="Known bug, fix pending")
def test_xfail():
    assert False
```

4. `@pytest.mark.parametrize`: This marker is used to run a test function multiple times with different arguments.

   Example:

```python
    @pytest.mark.parametrize("input,expected", [(1, 2), (2, 3), (3, 4)])
def test_add_one(input, expected):
    assert input + 1 == expected
```

5. `@pytest.mark.usefixtures`: This marker indicates that a test function should use a fixture. The fixture will be set
   up before the test is run and torn down after the test is finished.

   Example:

```python
    @pytest.mark.usefixtures("database_connection")
def test_database_query():
    pass
```

6. `@pytest.mark.filterwarnings`: This marker can be used to ignore or fail for certain warnings.

   Example:

```python
    @pytest.mark.filterwarnings("ignore:deprecated function:DeprecationWarning")
def test_deprecated_function():
    pass
```

Remember, you can also define your own custom markers to suit your specific testing needs.

### mark.usefixtures vs fixture

The `@pytest.mark.usefixtures("fixturename")` marker and providing the fixture as a parameter to your test function are two ways to use fixtures in Pytest, but they are used in slightly different scenarios.

1. `@pytest.mark.usefixtures("fixturename")`: This marker is used when you want to use a fixture, but you don't need the fixture's return value in your test. The fixture will be set up before the test is run and torn down after the test is finished. This is often used for fixtures that set up state or configure the environment, but don't need to provide data directly to the test.

    Example:
```python
    @pytest.mark.usefixtures("database_connection")
    def test_database_query():
        # Test that doesn't need the return value of the fixture
        pass
```

2. Providing the fixture as a parameter: If your test needs to use the return value of the fixture, you should provide the fixture as a parameter to your test function. Pytest will automatically call the fixture function and pass its return value to your test.

    Example:
```python
    def test_database_query(database_connection):
        # Test that uses the return value of the fixture
        assert database_connection.query("SELECT 1") == 1
```

In this example, the `database_connection` fixture might return a `DatabaseConnection` object that the test uses to perform a query.

In summary, if you need to use the return value of a fixture in your test, provide the fixture as a parameter to your test function. If you don't need the return value, you can use the `@pytest.mark.usefixtures("fixturename")` marker.

## Mocking
Mocking is a powerful feature in testing, and it's used when you want to imitate the behavior of real objects in a controlled way. In Python, the `unittest.mock` module is often used for this purpose. Mocking is primarily used in unit testing. An object under test may have dependencies on other (complex) objects. To isolate the behavior of the object you want to test, you replace the other objects with mocks that simulate the behavior of the real objects.

Mocking is beneficial because it makes it easy to isolate the unit of code under test and thus makes your tests more focused and potentially easier to understand and maintain. It also allows you to write tests of components that haven't been completed yet or that are impractical to include in a test, such as a database access component.

Let's take an example where we have a function that interacts with a database. We'll mock the database interaction to isolate the function for testing.

```python
import pytest
from unittest.mock import Mock, patch
from myapp import db, get_user

# This is the function we want to test
def get_user(user_id):
    return db.get_user(user_id)

# This is our test
def test_get_user():
    # We patch the db.get_user function with a Mock
    with patch('myapp.db.get_user') as mock_get_user:
        # We set the return value of the mock
        mock_get_user.return_value = {'id': 1, 'name': 'Test User'}

        # Now when we call get_user, instead of interacting with the database,
        # it will interact with our mock
        user = get_user(1)

        # We can make assertions about how the mock was called
        mock_get_user.assert_called_once_with(1)

        # And we can make assertions about the return value
        assert user == {'id': 1, 'name': 'Test User'}
```

In this example, `patch('myapp.db.get_user')` replaces the real `db.get_user` function with a `Mock` object. The `mock_get_user.return_value` line sets the return value of the mock. When `get_user(1)` is called, it calls the mock instead of the real `db.get_user` function, and the mock returns `{'id': 1, 'name': 'Test User'}`.

The `mock_get_user.assert_called_once_with(1)` line asserts that the mock was called once with `1` as the argument. This is a way to ensure that your function is calling the database function correctly.

This is a simple example, but mocks can do much more. They can assert that they were called with specific arguments, in a specific order, a specific number of times, and more. They can also raise exceptions to simulate errors.

### Advance usage

Great, let's delve deeper into the world of mocking in Python.

In addition to the basic usage of mocks, there are several other features that can be useful in different situations:

1. **Side Effects**: You can use the `side_effect` attribute of a mock to specify a function to be called whenever the mock is called, or to raise an exception. This can be useful for simulating different behaviors of the function you're mocking. For example:

```python
def test_get_user_details_exception():
    with patch.object(Database, 'get_user') as mock_get_user:
        # We set the side_effect of the mock to raise an exception
        mock_get_user.side_effect = Exception('Database error')

        # Now when we call get_user_details, it will raise an exception
        with pytest.raises(Exception) as e:
            get_user_details(1)

        # We can make assertions about the exception
        assert str(e.value) == 'Database error'

        # We can also make assertions about how the mock was called
        mock_get_user.assert_called_once_with(1)
```

In this test, calling `get_user_details(1)` will raise an `Exception` with the message 'Database error'. This allows us to test how our function handles exceptions when trying to fetch user data.

2. **Mocking Methods**: You can also use `patch` to mock methods of objects. This can be useful when you want to isolate a method of an object for testing. For example:

```python
class Database:
    def get_user(self, user_id):
        pass  # Actual implementation here

def test_database_get_user():
    with patch.object(Database, 'get_user') as mock_get_user:
        mock_get_user.return_value = {'id': 1, 'name': 'Test User'}

        db = Database()
        user = db.get_user(1)

        mock_get_user.assert_called_once_with(1)
        assert user == {'id': 1, 'name': 'Test User'}
```

In this example, `patch.object(Database, 'get_user')` replaces the `get_user` method of `Database` instances with a mock. The rest of the test is similar to the previous examples.

3. **Mocking Classes**: You can use `patch` to mock entire classes. This can be useful when you want to isolate a class for testing. For example:

```python
class Database:
    def get_user(self, user_id):
        pass  # Actual implementation here

def test_database():
    with patch('myapp.Database') as mock_database:
        mock_database.return_value.get_user.return_value = {'id': 1, 'name': 'Test User'}

        db = Database()
        user = db.get_user(1)

        mock_database.return_value.get_user.assert_called_once_with(1)
        assert user == {'id': 1, 'name': 'Test User'}
```

In this example, `patch('myapp.Database')` replaces the `Database` class with a mock. When `Database()` is called, it returns another mock (the `return_value` of the `Database` mock), and when `get_user(1)` is called on that mock, it returns `{'id': 1, 'name': 'Test User'}`.

These are just a few examples of what you can do with mocking in Python. The `unittest.mock` module is very flexible and can handle a wide range of testing scenarios.

### Mock functions in dataclasses

Mocking is a powerful feature in testing, where you replace parts of your system with dummy implementations that mimic the behavior of the parts they replace. This is particularly useful when the parts you're replacing are slow or unreliable, such as database calls.

In Python, the `unittest.mock` module provides a `Mock` class to create mock objects. Here's how you can use it to mock a function from a dataclass that represents a call to a database.

Let's say you have a dataclass like this:

```python
from dataclasses import dataclass

@dataclass
class Database:
    def fetch_data(self, query: str):
        # Implementation of fetching data from database
        pass
```

You can mock the `fetch_data` function without a decorator like this:

```python
from unittest.mock import Mock

# Create an instance of the dataclass
db = Database()

# Replace the fetch_data function with a mock
db.fetch_data = Mock()

# Now you can call the mock function just like the original
db.fetch_data("SELECT * FROM table")

# You can make assertions about how the mock was called
db.fetch_data.assert_called_once_with("SELECT * FROM table")
```

In this example, `db.fetch_data` is replaced with a mock. When you call `db.fetch_data`, you're actually calling the mock, not the original function. The mock records how it's called, so you can make assertions about it later.

This is a simple example. In a real test, you might want to configure the mock to return a specific value or raise an exception, to simulate different behaviors of the database. You can do this with the `return_value` and `side_effect` attributes of the mock:

```python
# Make the mock return a specific value
db.fetch_data.return_value = ["row1", "row2", "row3"]

# Make the mock raise an exception
db.fetch_data.side_effect = Exception("Database error")
```

Remember, the purpose of mocking is not to test the behavior of the database, but to test your code's behavior when interacting with the database. The database is assumed to work correctly.

### Mocking and parametrization
Combining mocking with Pytest's parametrization feature allows you to test how your code behaves under different conditions. Here's how you can do it:

First, let's define a test function that uses a `Database` instance:

```python
def process_data(db):
    data = db.fetch_data("SELECT * FROM table")
    # Process the data...
    return data
```

Now, let's write a parametrized test for this function. We'll test it with three different scenarios: when the database returns data normally, when it returns no data, and when it raises an exception.

```python
import pytest
from unittest.mock import Mock

@pytest.mark.parametrize("db_return, expected_result", [
    (["row1", "row2", "row3"], ["row1", "row2", "row3"]),  # Normal case
    ([], []),  # No data
    (Exception("Database error"), None),  # Exception
])
def test_process_data(db_return, expected_result):
    # Create a mock database
    db = Mock()

    # Configure the mock to return the specified value or raise the specified exception
    if isinstance(db_return, Exception):
        db.fetch_data.side_effect = db_return
    else:
        db.fetch_data.return_value = db_return

    # Call the function with the mock database
    result = process_data(db)

    # Check that the function returned the expected result
    assert result == expected_result

    # Check that the function called the mock database correctly
    db.fetch_data.assert_called_once_with("SELECT * FROM table")
```

In this test, `db_return` and `expected_result` are parameters that are filled in with different values for each test case. The `db` object is a mock that is configured to return `db_return` when its `fetch_data` method is called. The `process_data` function is then called with the mock `db`, and its return value is checked against `expected_result`.

This way, you can test how `process_data` behaves under different conditions, without having to write separate tests for each condition.

##  Detailed Reports

One of the most powerful features of Pytest is its ability to generate detailed reports on test results. When you run a test suite with Pytest, it automatically generates a report that includes information on which tests passed, which tests failed, and why they failed. This information is invaluable for diagnosing and fixing problems in your code.

The report includes the following information:

1. The total number of tests run.
2. The number of tests that passed.
3. The number of tests that failed.
4. The number of tests that were skipped.
5. Detailed information on each failed test, including the test name, the line of code where the failure occurred, and the error message.

EXAMPLE

Let's say we have a Python file named `test_example.py` with the following code:

```python
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5

def test_fail():
    assert add(2, 2) == 5
```

If we run this file with Pytest, we will get a report like this:

```
============================= test session starts ==============================
collected 2 items                                                              

test_example.py .F                                                        [100%]

=================================== FAILURES ===================================
_______________________________ test_fail _______________________________

    def test_fail():
>       assert add(2, 2) == 5
E       assert 4 == 5

test_example.py:8: AssertionError
=========================== short test summary info ============================
FAILED test_example.py::test_fail - assert 4 == 5
========================= 1 failed, 1 passed in 0.12s =========================
```

In this report, the `.` represents a passed test and the `F` represents a failed test. The report shows that `test_add` passed and `test_fail` failed. It also provides detailed information on why `test_fail` failed, including the line of code where the failure occurred (`assert add(2, 2) == 5`) and the error message (`assert 4 == 5`).

This detailed report makes it easy to see at a glance which tests passed and which failed, and to understand why the failures occurred. This makes it easier to diagnose and fix problems in your code.

## Configuration and cli options
### Cli options

Pytest's command-line interface (CLI) options provide a way to customize the behavior of Pytest. Here are some of the most commonly used CLI options:

1. `-v` or `--verbose`: Increases verbosity. Each test run is reported individually, rather than being grouped together.

   Example: `pytest -v`

2. `-q` or `--quiet`: Decreases verbosity. Only a minimal amount of information is displayed.

   Example: `pytest -q`

3. `-s`: Disables output capture. Allows you to see print statements and logging output in the console.

   Example: `pytest -s`

4. `-k`: Runs only tests with names that match the given string expression. This is a powerful way to selectively run tests.

   Example: `pytest -k "MyClass and not method"`

5. `-x`: Stops testing after the first failure. This can be useful when debugging.

   Example: `pytest -x`

6. `--lf` or `--last-failed`: Runs only the tests that failed at the last run. This can be useful to quickly retest failures.

   Example: `pytest --lf`

7. `--ff` or `--failed-first`: Runs all tests but organizes them so that failures from the last run are executed first. This is useful to get quick feedback on previously failed tests.

   Example: `pytest --ff`

8. `-m` or `--mark`: Runs only tests marked with the given mark. This is useful when you have categorized your tests using Pytest markers.

   Example: `pytest -m slow`

9. `--cov`: Used with the pytest-cov plugin, this option generates a coverage report for your tests.

   Example: `pytest --cov=myproject`

10. `--doctest-modules`: Checks all doctests in all .py modules.

    Example: `pytest --doctest-modules`

11. `--junitxml`: Creates a junit xml file with the test results. This is useful for integrating with continuous integration servers.

    Example: `pytest --junitxml=report.xml`

These are just a few of the CLI options available in Pytest. You can see a full list of options by running `pytest --help` in your terminal.

### `pytest.ini`
Pytest can be configured to suit your specific testing needs. This can be done using a pytest.ini file or command-line options.

- pytest.ini: This is a project-level configuration file for pytest. It is typically placed in the root directory of your project. The pytest.ini file is used to define default test paths, add custom markers, and set other configuration options. Here's an example of what a pytest.ini file might look like:

```ini
[pytest]
minversion = 6.0
addopts = -ra -q
testpaths = tests
markers = slow: marks tests as slow (deselect with '-m "not slow"')
```

In this example, `minversion` specifies the minimum pytest version required for the tests. `addopts` are additional command-line options. `testpaths` specifies the directories that pytest should search for tests in. `markers` are custom markers that can be applied to tests.

- Command-line options: Pytest provides a wide range of command-line options that can be used to control the testing process. For example, you can use the `-k` option to run only tests with a specific name, the `-x` option to stop testing after the first failure, or the `-s` option to allow print statements to output to the console.

### conftest.py
4. Conftest.py:

The conftest.py file is a special file used by pytest. It is automatically discovered by pytest, and its contents are made available to all tests in the directory where it is located and any subdirectories.

The conftest.py file is typically used to store fixtures, hooks, and other configuration settings that are shared across multiple test files. For example, you might define a fixture in conftest.py that sets up a database connection, and then use this fixture in multiple test files.

Here's an example of what a conftest.py file might look like:

```python
import pytest

@pytest.fixture
def db_connection():
    # Set up the database connection here
    connection = setup_db_connection()
    yield connection
    # Tear down the database connection here
    teardown_db_connection(connection)
```

In this example, the `db_connection` fixture sets up a database connection before each test that uses it, and tears down the connection after the test is finished. This ensures that each test has a fresh, isolated database connection.


Test Doubles: Understanding the use of mocks, stubs, and fakes in testing, and how to use libraries like unittest.mock or pytest-mock to create these test doubles.


## Plugins

Pytest plugins are a powerful feature that allows you to extend the functionality of Pytest. There are many plugins available, each designed to solve a specific problem or provide additional features. Here are some of the most important ones:

1. pytest-cov: This plugin is used for measuring code coverage. It integrates with the coverage.py library and generates coverage reports. This is useful for identifying parts of your code that are not being tested.

   Example usage:
```sh
   pytest --cov=myproject tests/
```
   This command runs tests in the `tests/` directory and generates a coverage report for the `myproject` module.

2. pytest-xdist: This plugin allows you to run tests in parallel, which can significantly speed up test execution. It also supports distributed testing and loop-on-failing modes.

   Example usage:
```sh
   pytest -n 4
```
   This command runs tests in four parallel processes.

3. pytest-mock: This plugin provides a simple and powerful interface for mocking and monkey patching in tests. It integrates with the unittest.mock library.

   Example usage:
```py
   def test_function(mocker):
       mock = mocker.patch('module.ClassName')
       mock.return_value.method.return_value = 'value'
       assert function_that_uses_ClassName() == 'value'
```
   This test uses pytest-mock to mock a method in a class.

4. pytest-django: If you're working with Django, this plugin provides a collection of useful tools and fixtures for testing Django applications.

   Example usage:
```sh
   pytest --ds=myproject.settings
```
   This command runs tests with the Django settings module set to `myproject.settings`.

5. pytest-flask: This plugin provides a set of useful tools and fixtures for testing Flask applications.

   Example usage:
```py
   @pytest.mark.options(debug=False)
   def test_app(app):
       assert not app.debug, 'Ensure the app not in debug mode'
```
   This test uses pytest-flask to set Flask application options.

Remember, to use a plugin, you need to install it first using pip, like so: `pip install pytest-cov`. After installation, the plugin is automatically available for use in your tests.
