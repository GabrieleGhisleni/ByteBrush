

<!-- toc -->

- [Browser APIs](#browser-apis)
  * [DOM Manipulation](#dom-manipulation)
    + [Selecting elements](#selecting-elements)
    + [Element manipulations](#element-manipulations)
    + [Styling elements](#styling-elements)
    + [Displaying elements conditionally](#displaying-elements-conditionally)
  * [Events](#events)
    + [Event listeners](#event-listeners)
    + [Mouse events](#mouse-events)
    + [Keyboard events](#keyboard-events)
    + [Form events](#form-events)
    + [Window events](#window-events)
- [Timers](#timers)

<!-- tocstop -->

## Browser APIs

### DOM Manipulation

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that
programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.
That way, programming languages can connect to the page.

#### Selecting elements

In JavaScript, there are several ways to select HTML elements. Here are some of the most commonly used methods:

1. `document.getElementById(id)`: This method selects an element by its ID. It returns the first element in the document
   that matches the specified ID, or `null` if no matching element was found.

   Example:
   ```javascript
   var element = document.getElementById("myId");
   ```

2. `document.getElementsByClassName(className)`: This method selects elements by their class name. It returns a live
   HTMLCollection of elements with the specified class name.

   Example:

```javascript
   var elements = document.getElementsByClassName("myClass");
```

3. `document.getElementsByTagName(tagName)`: This method selects elements by their tag name. It returns a live
   HTMLCollection of elements with the specified tag name.

   Example:

```javascript
   var elements = document.getElementsByTagName("p");
```

4. `document.querySelector(selector)`: This method selects the first element that matches a specified CSS selector(s) in
   the document.

   Example:

```javascript
   var element = document.querySelector(".myClass");
```

5. `document.querySelectorAll(selector)`: This method selects all elements that match a specified CSS selector(s) in the
   document. It returns a static NodeList.

   Example:

```javascript
   var elements = document.querySelectorAll(".myClass");
```

Remember, `getElementById`, `getElementsByClassName`, and `getElementsByTagName` are older methods and they return live
collections. This means that changes in the DOM are automatically reflected in the collection. On the other
hand, `querySelector` and `querySelectorAll` are newer methods and they return static collections or single elements.
This means that changes in the DOM are not reflected in the collections or elements returned by these methods.

#### Element manipulations

Modifying elements in the DOM (Document Object Model) is a common task in JavaScript. Here are some of the most useful
methods for modifying elements:

1. `innerHTML`: This property allows you to get or set the HTML content (the inner HTML) of an element.

```javascript
document.getElementById("myDiv").innerHTML = "<p>New content!</p>";
```

2. `textContent`: This property sets or returns the text content of the specified node, and all its descendants.

```javascript
document.getElementById("myDiv").textContent = "New text content!";
```

3. `setAttribute()`: This method adds a new attribute or changes the value of an existing attribute on an element.

```javascript
document.getElementById("myImage").setAttribute("src", "newImage.jpg");
```

4. `removeAttribute()`: This method removes an attribute from an element.

```javascript
document.getElementById("myImage").removeAttribute("src");
```

5. `createElement()`: This method creates a new element with the specified tag name.

```javascript
let newParagraph = document.createElement("p");
```

6. `appendChild()`: This method appends a node as the last child of a node.

```javascript
let newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph!";
document.body.appendChild(newParagraph);
```

7. `removeChild()`: This method removes a child node from an element.

```javascript
let paragraph = document.querySelector("p");
document.body.removeChild(paragraph);
```

8. `replaceChild()`: This method replaces a child node with a new node.

```javascript
let newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph!";
let oldParagraph = document.querySelector("p");
document.body.replaceChild(newParagraph, oldParagraph);
```

9. `classList`: This property is useful for adding, removing, and toggling CSS classes on an element.

```javascript
document.getElementById("myDiv").classList.add("newClass");
document.getElementById("myDiv").classList.remove("oldClass");
document.getElementById("myDiv").classList.toggle("anotherClass");
```

Remember, when modifying elements, you should always be mindful of potential security risks, such as Cross-Site
Scripting (XSS) attacks. Always validate and sanitize user input to ensure that it does not contain malicious code.

#### Styling elements

Modifying styles in JavaScript is often done by directly manipulating the `style` property of an HTML element. This
property is an object that contains CSS properties as keys, and you can assign new values to these keys to change the
style of the element.

Here's an example:

```javascript
let element = document.getElementById('myElement');
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
```

In this example, the text color of the element with the ID `myElement` is changed to blue, and the background color is
changed to yellow.

While this method is straightforward and easy to use, it has some limitations. For example, it can only be used to
modify inline styles, and it doesn't support CSS selectors or pseudo-classes.

A more powerful and flexible way to modify styles in JavaScript is by manipulating CSS classes. Instead of directly
changing the style properties of an element, you can define a CSS class with the desired styles, and then add or remove
this class from the element using JavaScript.

Here's an example:

```css
/* CSS */
.myClass {
    color: blue;
    background-color: yellow;
}
```

```javascript
// JavaScript
let element = document.getElementById('myElement');
element.classList.add('myClass');
```

In this example, the same styles are applied to the element, but they are defined in a CSS class instead of being set
directly in JavaScript. This method is more flexible because it allows you to group multiple styles together, reuse them
across different elements, and take advantage of all the features of CSS.

The `classList` property provides several methods for manipulating classes, including `add()`, `remove()`, `toggle()`,
and `contains()`. These methods make it easy to dynamically change the appearance of elements based on user interactions
or other conditions.

In conclusion, while directly modifying the `style` property can be useful for simple style changes, using CSS classes
is generally a more powerful and flexible pattern for modifying styles in JavaScript.

#### Displaying elements conditionally

This can be useful with display properties:

```javascript
let element = document.querySelector("p");
element.style.display = "none";
```

or

```javascript
let element = document.querySelector("p");
element.style.display = "block";
```

### Events

In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking a button, hovering
over an element, or submitting a form. Events allow you to respond to these actions and execute specific code or
functions.

There are various types of events in JavaScript, including:

1. Mouse events: These events are triggered by mouse actions, such as clicking, hovering, or moving the mouse. Examples
   include "click", "mouseover", "mouseout", etc.
2. Keyboard events: These events are triggered by keyboard actions, such as pressing a key or releasing a key. Examples
   include "keydown", "keyup", "keypress", etc.
3. Form events: These events are triggered by form-related actions, such as submitting a form, changing the value of an
   input field, or focusing on an input field. Examples include "submit", "change", "focus", etc.
4. Window events: These events are triggered by actions related to the browser window, such as resizing the window,
   scrolling the page, or loading the page. Examples include "resize", "scroll", "load", etc.

To handle events in JavaScript, you can use event listeners or event handlers. Event listeners are functions that are
executed when an event occurs, and they can be attached to specific elements using methods like `addEventListener()`.
Event handlers, on the other hand, are functions that are directly assigned to the event property of an element.

#### Event listeners

You can use event listeners to handle events in JavaScript. Here's an example:

```javascript
let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

#### Mouse events

Mouse events in JavaScript are triggered by actions performed with the mouse, such as clicking, moving, or hovering over
elements on a webpage. These events allow you to respond to user interactions and perform specific actions accordingly.

Here are some commonly used mouse events in JavaScript:

1. click: This event is triggered when the user clicks the mouse button on an element.

2. dblclick: This event is triggered when the user double-clicks the mouse button on an element.

3. mouseover: This event is triggered when the mouse pointer enters the boundaries of an element.

4. mouseout: This event is triggered when the mouse pointer leaves the boundaries of an element.

5. mousemove: This event is triggered when the mouse pointer moves within the boundaries of an element.

6. mousedown: This event is triggered when the user presses the mouse button down on an element.

7. mouseup: This event is triggered when the user releases the mouse button after pressing it down on an element.

To handle mouse events in JavaScript, you can use event listeners or event handlers. Here's an example of attaching an
event listener to a button element for the "click" event:

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function () {
    console.log('Button clicked!');
});
```

#### Keyboard events

Keyboard events in JavaScript are triggered by user interactions with the keyboard. These events allow you to respond to
key presses, releases, and other keyboard-related actions. Here are some commonly used keyboard events:

1. `keydown`: This event is triggered when a key is initially pressed down. It occurs continuously if the key is held
   down.

2. `keyup`: This event is triggered when a key is released after being pressed down.

3. `keypress`: This event is triggered when a key is initially pressed down and a character is generated. It doesn't
   occur for non-character keys like Shift or Ctrl.

To handle keyboard events, you can use event listeners or event handlers. Here's an example of attaching an event
listener to the `keydown` event:

```javascript
document.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
});
```

In this example, the function is executed whenever a key is pressed down, and it logs the pressed key to the console.

Keyboard events also provide additional information through the `event` object. For example, you can access
the `event.key` property to get the value of the pressed key. Other properties like `event.keyCode`, `event.shiftKey`
, `event.ctrlKey`, etc., provide more details about the keyboard event.

#### Form events

Form events in JavaScript are events that are triggered by actions related to HTML forms. These events allow you to
respond to user interactions with form elements, such as submitting a form, changing the value of an input field, or
focusing on an input field.

Here are some commonly used form events:

1. `submit`: This event is triggered when a form is submitted, either by clicking a submit button or by pressing the
   Enter key while focused on an input field. You can use this event to perform form validation, handle form data, or
   prevent the default form submission behavior.

2. `change`: This event is triggered when the value of an input field, select element, or textarea is changed. It is
   commonly used to detect when a user has made a selection or entered text in a form field.

3. `input`: This event is similar to the `change` event, but it is triggered immediately when the value of an input
   field changes, even before the user finishes typing or leaves the field. It is often used for real-time validation or
   to update the UI as the user types.

4. `focus`: This event is triggered when an input field, select element, or textarea gains focus, meaning it becomes the
   active element. It can be used to perform actions when a user starts interacting with a specific form field.

5. `blur`: This event is triggered when an input field, select element, or textarea loses focus, meaning it is no longer
   the active element. It can be used to perform actions when a user finishes interacting with a specific form field.

To handle form events, you can use event listeners or event handlers, similar to other JavaScript events. You can attach
event listeners to form elements using methods like `addEventListener()`, and then execute the desired code or functions
when the events occur.

Here's an example of attaching an event listener to a form's submit event:

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Perform form validation or handle form data
});
```

In this example, the function is executed when the form is submitted, and it prevents the default form submission
behavior using `event.preventDefault()`. This allows you to handle the form submission manually, such as validating the
form data before sending it to the server.

#### Window events

Window events in JavaScript are triggered by actions related to the browser window or the document itself. These events
allow you to respond to a variety of interactions and states, such as when the page has finished loading, when the
window is resized, or when the user scrolls the page. Here are some common window events:

1. `load`: This event is triggered when the entire page has loaded, including all dependent resources such as
   stylesheets and images. It's often used to trigger functions that should only run once everything on the page is
   fully loaded.

2. `resize`: This event is triggered when the browser window is resized. It can be used to adjust layout or elements in
   response to changes in window size.

3. `scroll`: This event is triggered when the user scrolls the page. It can be used to create scroll-dependent features,
   such as sticky headers or reveal-on-scroll animations.

4. `unload`: This event is triggered when the page is being unloaded (usually because a new page is being loaded). It's
   often used to clean up before the document is unloaded, such as saving data.

5. `beforeunload`: This event is triggered just before the window is about to unload its resources. It can be used to
   warn the user about unsaved changes.

6. `focus` and `blur`: These events are triggered when the window gains or loses focus, respectively. They can be used
   to pause and resume activities based on whether the user is currently interacting with the window.

Here's an example of how to use the `resize` event:

```javascript
window.addEventListener('resize', function () {
    console.log('Window resized to ' + window.innerWidth + 'x' + window.innerHeight);
});
```

In this example, whenever the window is resized, a message is logged to the console with the new window dimensions.

## Timers

In JavaScript, there are several built-in methods that allow you to execute code at specified time intervals. These are known as timers. The most commonly used timers are `setTimeout()`, `setInterval()`, and `clearInterval()`.

1. `setTimeout()`: This method allows you to execute a function or specified piece of code once after a specified number of milliseconds. Here's an example:

```javascript
setTimeout(function() {
  console.log('This message will appear after 2 seconds');
}, 2000);
```

In this example, the message will be logged to the console after 2 seconds (2000 milliseconds).

2. `setInterval()`: This method is similar to `setTimeout()`, but instead of executing the code once after a specified number of milliseconds, it executes the code repeatedly at that interval. Here's an example:

```javascript
setInterval(function() {
  console.log('This message will appear every 2 seconds');
}, 2000);
```

In this example, the message will be logged to the console every 2 seconds.

3. `clearInterval()`: This method is used to stop the repeated execution of code set up using `setInterval()`. It requires the ID value returned by `setInterval()`. Here's an example:

```javascript
let intervalId = setInterval(function() {
  console.log('This message will appear every 2 seconds');
}, 2000);

// After 10 seconds, stop the repeated message
setTimeout(function() {
  clearInterval(intervalId);
}, 10000);
```

In this example, the message will stop appearing after 10 seconds.

These timers are very useful for creating delays, repeating actions, animations, and more.
