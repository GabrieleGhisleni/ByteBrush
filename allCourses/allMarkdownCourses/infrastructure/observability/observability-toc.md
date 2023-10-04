

<!-- toc -->

- [Observability](#observability)
  * [Introduction](#introduction)
  * [Logging](#logging)
    + [Loguru in python](#loguru-in-python)
  * [Tracing](#tracing)
    + [Tracing in Python](#tracing-in-python)
    + [Tracing in Python more advanced](#tracing-in-python-more-advanced)
    + [Saving traces](#saving-traces)

<!-- tocstop -->

# Observability
## Introduction

Observability is not a single tool but rather a property of a system that is crucial in modern software development. It refers to the ability to understand the internal state of a system by examining its outputs. In the context of software development, observability is about making a system's internal workings visible and understandable to developers, operators, and tools. It is a critical aspect of system design that helps in diagnosing problems, understanding system behavior, and improving system performance.

Observability solves several problems in software development. It helps developers understand complex systems, identify and fix bugs, and optimize performance. It also aids in the detection of anomalies, the understanding of system dependencies, and the prediction of system behavior under different conditions.

CORE COMPONENTS

1. Logging: Logging is the process of recording events in a system. Logs provide a detailed chronological record of events that have occurred in a system. They are essential for debugging and understanding system behavior. Logs can be stored and analyzed to identify patterns, detect anomalies, and understand system performance.

2. Metrics: Metrics are numerical values that represent the state of a system at a particular point in time. They provide a quantitative understanding of system behavior. Metrics can be used to monitor system performance, identify trends, and set alerts for when certain thresholds are exceeded.

3. Tracing: Tracing is the process of tracking individual requests as they flow through a system. Traces provide a detailed view of the path that a request takes through a system and the operations it triggers. They are essential for understanding system dependencies, diagnosing problems, and optimizing performance.

4. Instrumentation: Instrumentation is the process of adding observability to a system. It involves adding code to a system to generate logs, metrics, and traces. Instrumentation can be done manually, by adding code to a system, or automatically, using tools that automatically inject observability code into a system.

5. Visualization: Visualization is the process of presenting observability data in a visual format. It involves creating dashboards, graphs, and charts that represent system behavior. Visualization helps developers understand complex systems, identify trends, and detect anomalies.

6. Alerting: Alerting is the process of notifying developers when certain conditions are met. Alerts can be based on thresholds, anomalies, or patterns in observability data. They help developers respond quickly to problems and prevent system downtime.

These components work together to provide a comprehensive view of a system's internal workings. By examining logs, metrics, and traces, developers can understand system behavior, diagnose problems, and optimize performance. Instrumentation makes it possible to generate this data, while visualization and alerting make it actionable.

## Logging

Logging is a fundamental part of observability. It involves recording events or messages that occur while a system is running. These logs can then be used to understand the system's behavior, identify and debug issues, and even provide insights for system optimization.

### Loguru in python
In Python, there are several libraries available for logging, one of which is Loguru. Loguru is a library that provides a simple and intuitive approach to logging, with a minimal setup required.

Let's dive into how to use Loguru for logging in Python.

First, you need to install the Loguru library. You can do this using pip:

```python
pip install loguru
```

Once installed, you can import the library into your Python script and start using it for logging:

```python
from loguru import logger

logger.debug("This is a debug message")
logger.info("This is an info message")
logger.warning("This is a warning message")
logger.error("This is an error message")
```

In the above example, we're logging messages at different levels (debug, info, warning, and error). The level indicates the severity of the messages, with 'debug' being the least severe and 'error' being the most severe.

Loguru also simplifies file logging. Here's an example of how to log messages to a file:

```python
logger.add("file.log")

logger.info("This is an info message")
```

In this example, the `logger.add()` function is used to specify that the log messages should be written to a file named 'file.log'. After this, any log messages will be written to this file.

Log rotation is a feature that Loguru provides to manage log files. When a log file reaches a certain size or age, it can be automatically "rotated", i.e., archived and replaced with a new file. This is useful to prevent log files from consuming too much disk space and to keep them manageable.

Here's an example of how to set up log rotation based on file size:

```python
logger.add("file_{time}.log", rotation="500 MB")  # Each file is 500MB
```

In this example, a new log file will be created each time the current file reaches 500MB. The `{time}` in the filename will be replaced with the current time when the file is created, ensuring that each file has a unique name.

Loguru also supports rotation based on time. For example, you can set up a rotation to create a new log file every day:

```python
logger.add("file_{time}.log", rotation="1 day")  # New file is created every day
```

In this example, a new log file will be created every day, with the `{time}` in the filename replaced with the current date.

These are some of the basic features of Loguru. It also supports more advanced features like exception logging, asynchronous logging, and customizable log formatting.

## Tracing
Tracing is a crucial aspect of observability that allows developers to track the journey of individual requests or transactions as they traverse through various services in a system. This is particularly useful in microservices architecture where a single request can span multiple services. Tracing helps in identifying bottlenecks, understanding system dependencies, and diagnosing issues that may arise in a system.

In the context of tracing, there are two important concepts:

1. **Trace**: A trace represents the journey of a request through a system. It is composed of one or more spans.

2. **Span**: A span represents a single operation within a trace, such as a call to a service or a computation. Each span has a start time, an end time, and metadata such as tags and logs.

### Tracing in Python
Python has several libraries for implementing tracing, such as OpenTelemetry and Jaeger. Here's a simple example of how you might implement tracing in Python using the OpenTelemetry library:

```python
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import ConsoleSpanExporter, SimpleExportSpanProcessor

# Set up the tracer
trace.set_tracer_provider(TracerProvider())
trace.get_tracer_provider().add_span_processor(
    SimpleExportSpanProcessor(ConsoleSpanExporter())
)

# Get a reference to the tracer
tracer = trace.get_tracer(__name__)

# Create a new span and set it as the current span
with tracer.start_as_current_span("my_span"):
    # Do some work
    print("Hello, World!")

# The span automatically ends when the with block is exited
```

In this example, a new span named "my_span" is created and set as the current span. Any work done within the `with` block is part of this span. The span is automatically ended when the `with` block is exited. The span data is then exported to the console using the `ConsoleSpanExporter`.

This is a very basic example. In a real-world application, you would likely have many spans representing different operations, and these spans would be nested to represent the flow of requests through your system. You would also likely export your spans to a tracing backend like Jaeger or Zipkin, where you could visualize and analyze them.


### Tracing in Python more advanced

Yes, there is a way to introduce tracing in your code without manually adding it to each function. This can be achieved through the use of middleware, decorators, or context managers, depending on your application's structure and the framework you're using.

For web applications, many frameworks support middleware, which are components that can process requests and responses before they reach your application code. You can use middleware to automatically start a new trace for each incoming request and end it when the response is sent. Here's an example using Flask:

```python
from flask import Flask
from opentelemetry import trace
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import ConsoleSpanExporter, SimpleExportSpanProcessor

# Set up the tracer
trace.set_tracer_provider(TracerProvider())
trace.get_tracer_provider().add_span_processor(
    SimpleExportSpanProcessor(ConsoleSpanExporter())
)

app = Flask(__name__)

# Instrument the Flask app
FlaskInstrumentor().instrument_app(app)

@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == "__main__":
    app.run()
```

In this example, the `FlaskInstrumentor().instrument_app(app)` line automatically adds tracing to all routes in the Flask app.

For non-web applications or for more granular control, you can use decorators or context managers. A decorator is a special kind of function that can modify the behavior of other functions. Here's an example of a decorator that adds tracing to a function:

```python
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import ConsoleSpanExporter, SimpleExportSpanProcessor

# Set up the tracer
trace.set_tracer_provider(TracerProvider())
trace.get_tracer_provider().add_span_processor(
    SimpleExportSpanProcessor(ConsoleSpanExporter())
)

tracer = trace.get_tracer(__name__)

def trace_decorator(func):
    def wrapper(*args, **kwargs):
        with tracer.start_as_current_span(func.__name__):
            return func(*args, **kwargs)
    return wrapper

@trace_decorator
def my_function():
    # Do some work
    print("Hello, World!")

my_function()
```

In this example, the `@trace_decorator` line automatically adds tracing to the `my_function` function. You can add this decorator to any function you want to trace.

### Saving traces

Traces are not typically saved in your application itself. Instead, they are exported to an external service or system that is designed to store, visualize, and analyze trace data. These systems are often referred to as tracing backends or observability platforms.

There are several popular tracing backends available, including:

1. **Jaeger**: An open-source, end-to-end distributed tracing system that helps gather timing data for your application's workloads. It provides a UI to visualize trace data and can be run locally or in the cloud.

2. **Zipkin**: Another open-source distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in service architectures. It has a simple UI to analyze traces and can be run locally or in the cloud.

3. **Elastic APM**: A part of the Elastic Stack (Elasticsearch, Logstash, Kibana), Elastic APM provides application performance monitoring and distributed tracing capabilities.

4. **AWS X-Ray**: A service provided by Amazon Web Services that collects data about requests that your application serves, and provides tools you can use to view, filter, and gain insights into that data to identify issues and opportunities for optimization.

5. **Google Cloud Trace**: A distributed tracing system that collects latency data from your applications and displays it in the Google Cloud Console.

6. **New Relic**: A commercial application performance monitoring tool that provides distributed tracing capabilities.

In the Python examples provided earlier, we used the `ConsoleSpanExporter` to export trace data to the console. In a real-world application, you would likely use a different exporter that sends your trace data to a tracing backend. For example, if you were using Jaeger, you might use the `JaegerExporter`. The specific exporter you use depends on the tracing backend you choose.
