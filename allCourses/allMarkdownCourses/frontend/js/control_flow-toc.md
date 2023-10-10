

<!-- toc -->

- [Control Flow](#control-flow)
  * [If...else](#ifelse)
  * [If...else if...else](#ifelse-ifelse)
  * [Switch](#switch)
  * [Ternary operator](#ternary-operator)

<!-- tocstop -->

## Control Flow

### If...else

In JavaScript, an if...else statement is used to execute a block of code if a condition is true, and another block of
code if the condition is false. Here's an example:

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

In this example, the `age` variable is set to `18`. The `if` statement checks if the `age` is greater than or equal
to `18`. If it is, the first block of code is executed. If not, the second block of code is executed.

### If...else if...else

In JavaScript, an if...else if...else statement is used to execute a block of code if a condition is true, and another
block of code if the condition is false. Here's an example:

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}
```

In this example, the `age` variable is set to `18`. The `if` statement checks if the `age` is greater than or equal
to `18`. If it is, the first block of code is executed. If not, the `else if` statement checks if the `age` is greater
than or equal to `13`. If it is, the second block of code is executed. If not, the `else` statement is executed.

### Switch

In JavaScript, a switch statement is used to execute a block of code depending on the value of a variable. Here's an
example:

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}
```

In this example, the `day` variable is set to `Monday`. The `switch` statement checks the value of the `day` variable
and executes the corresponding block of code. If the value of the `day` variable is not one of the cases, the `default`
block of code is executed.

### Ternary operator

In JavaScript, a ternary operator is used to execute a block of code depending on the value of a variable. Here's an
example:

```javascript
let age = 18;

let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message); // You are an adult
```

In this example, the `age` variable is set to `18`. The ternary operator checks if the `age` is greater than or equal
to `18`. If it is, the first value is assigned to the `message` variable. If not, the second value is assigned to
the `message` variable.
