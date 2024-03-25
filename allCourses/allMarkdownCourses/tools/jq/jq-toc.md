<!-- toc -->

- [JQ](#jq)
  * [Basic Selection](#basic-selection)
  * [Filtering](#filtering)
  * [Advanced Selection](#advanced-selection)
  * [Complex Queries](#complex-queries)
  * [Useful examples](#useful-examples)

<!-- tocstop -->

# JQ

`jq` is a lightweight and flexible command-line JSON processor. It is designed for parsing, filtering, mapping, and transforming structured data, particularly JSON format, which is a widely used data interchange format on the web. `jq` is written in portable C, and it works on Linux, macOS, and Windows platforms, making it a versatile tool for developers, system administrators, and data analysts.

The primary strength of `jq` lies in its ability to allow users to slice, filter, map, and transform data with a simple and expressive language. It operates by reading JSON data from its standard input, transforming it according to a given filter or query, and then writing the result to standard output. This makes it an excellent tool for working with JSON data in shell scripts or for preprocessing complex data before analysis.

1. **Flexible Data Filtering and Selection**: `jq` allows users to easily select and filter data based on their requirements. Whether you need a single element, multiple elements, or elements based on specific conditions, `jq` can retrieve them with simple syntax.

2. **Deep Transformation Capabilities**: Beyond simple filtering, `jq` supports deep transformation of JSON structures. This includes modifying existing fields, adding new fields, merging JSON objects, and converting data types, among others. This allows for comprehensive manipulation of JSON data to fit the needs of any application.

3. **Rich Data Processing Functions**: `jq` comes with a variety of built-in functions for processing data. These include mathematical operations, string manipulation, array and object operations, and conditional logic. Users can also define their own functions to encapsulate complex logic for reuse.

4. **Streaming Large JSON Files**: For working with very large JSON files, `jq` offers a streaming parser that can process JSON data incrementally. This means that `jq` can handle files larger than available memory, making it suitable for big data applications.

5. **Compact and Pretty Output**: `jq` can format its output in both compact and pretty-printed forms. Pretty-printing is useful for human readability, while compact output is beneficial for minimizing data size for network transmission or storage.

6. **Command-Line Interface (CLI) Integration**: As a command-line tool, `jq` integrates seamlessly with Unix/Linux shells and scripting languages. This makes it easy to incorporate into pipelines and automate tasks involving JSON data processing.

7. **Zero Runtime Dependencies**: `jq` is a standalone program with no external runtime dependencies, making it easy to deploy and use across different systems without worrying about compatibility or installation of additional software.

8. **Cross-Platform Support**: `jq` is available on Linux, macOS, and Windows, ensuring that users can leverage its capabilities regardless of their operating system.

## Basic Selection

- **Identity Filter (`. `)**: The simplest `jq` filter is the identity filter, denoted by a period (`.`), which takes the input JSON and produces it unchanged. It's useful for pretty-printing JSON.

  ```sh
  echo '{"name": "John", "age": 30}' | jq '.'
  ```

- **Object Field (`.field`)**: To extract a specific field from an object, you use the field name prefixed by a period.

  ```sh
  echo '{"name": "John", "age": 30}' | jq '.name'
  ```

- **Array Index (`.[]`)**: To access elements of an array, you use square brackets. For example, to get the first item of an array:

  ```sh
  echo '["one", "two", "three"]' | jq '.[0]'
  ```

### Filtering

- **Pipe Operator (`|`)**: The pipe operator allows you to chain operations, where the output of one operation becomes the input to the next.

  ```sh
  echo '{"name": "John", "age": 30}' | jq '. | .name'
  ```

- **Select Function (`select()`)**: The `select()` function filters input based on a condition. It's very powerful for filtering arrays or objects based on complex conditions.

```sh
  echo '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]' | jq '.[] | select(.age > 25)'
```

### Advanced Selection

- **Map (`map()`)**: The `map()` function applies a filter to each element of an array, which is useful for transforming arrays.

```sh
  echo '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]' | jq 'map(.name)'
```

- **Length (`length`)**: You can get the length of an array or the number of keys in an object using the `length` function.

```sh
  echo '["one", "two", "three"]' | jq 'length'
```

### Complex Queries

- **Multiple Fields**: You can extract multiple fields from an object and output them as a new object.

```sh
  echo '{"name": "John", "age": 30, "city": "New York"}' | jq '{name: .name, city: .city}'
```

- **Conditional Logic (`if-then-else`)**: `jq` supports conditional logic, allowing for complex transformations based on conditions.

```sh
  echo '{"name": "John", "age": 30}' | jq 'if .age > 18 then "adult" else "minor" end'
```

### Sorting 
 You can sort an array of objects based on a specific field using the `sort_by` function.

```sh
  echo '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]' | jq 'sort_by(.age)'
```

- **Reverse Sort**: You can reverse the order of an array using the `reverse` function.
  
```sh
      echo '["one", "two", "three"]' | jq 'reverse'
```

### Unique

You can get unique elements from an array using the `unique` function.

```sh
    echo '[1, 2, 3, 2, 1, 4]' | jq 'unique'
```


## Useful examples
### Parsing an Array of Objects

Suppose you have a JSON array of objects, and you want to extract specific fields from each object and output them as a new array of objects. 

```sh
jq '.[] | select((.age > 25 and .skills | index("Python")) and (.name == "John" or .name | startswith("Ja"))) | {name: .name, age: .age}'
```

```json
[
  {"name": "John", "age": 31, "skills": ["Python", "JavaScript"]},
  {"name": "Jane", "age": 29, "skills": ["Python", "C++"]},
  {"name": "Jack", "age": 28, "skills": ["Python", "Java"]},
  {"name": "Doe", "age": 27, "skills": ["C#", "Java"]},
  {"name": "Jasmine", "age": 26, "skills": ["Python", "JavaScript"]},
  {"name": "Mike", "age": 30, "skills": ["Python"]}
]
```

- `.[]`: This part of the filter iterates over each element of the input array. It's used to process each object in the array individually.
- `select()`: This function filters the input based on a condition. The condition is a combination of multiple sub-conditions.
- `(.age > 25 and .skills | index("Python"))`: This condition checks if the age is greater than 25 and if the skills array contains the string "Python". The `index` function is used to check if the "Python" string exists in the skills array.
- `(.name == "John")`: This condition checks for an exact match of the name "John". The `==` operator is used for equality comparison.
- `(.name | startswith("Ja"))`: This condition checks if the name starts with "Ja". The `startswith` function is a string function that returns `true` if the input string starts with the specified prefix.

### Nested Object

Suppose you have a JSON object with nested objects, and you want to extract specific fields from the nested objects and output them as a new object. 

```sh
jq '.books[] | select(.details.publication_year > 2000 and ((.details.topics | index("Data Science")) or .ratings.average >= 4.5)) | {title: .title, first_author: .authors[0], publication_year: .details.publication_year, average_rating: .ratings.average}'
```

```json
{
  "books": [
    {
      "title": "Learning jq",
      "authors": ["John Doe", "Jane Doe"],
      "details": {
        "publication_year": 2021,
        "topics": ["JSON", "Data Processing", "jq"]
      },
      "ratings": {
        "average": 4.7,
        "reviews": 150
      }
    },
    {
      "title": "Introduction to Data Science",
      "authors": ["Sam Smith"],
      "details": {
        "publication_year": 2019,
        "topics": ["Data Science", "Statistics"]
      },
      "ratings": {
        "average": 4.3,
        "reviews": 200
      }
    },
    {
      "title": "Advanced Python Programming",
      "authors": ["Alex Johnson"],
      "details": {
        "publication_year": 2015,
        "topics": ["Python", "Software Development"]
      },
      "ratings": {
        "average": 4.5,
        "reviews": 100
      }
    }
  ]
}
```

- `.books[]`: This iterates over each book in the `books` array.
- `select(.details.publication_year > 2000 and ((.details.topics | index("Data Science")) or .ratings.average >= 4.5))`: The `select` function filters books based on multiple conditions:
  - `.details.publication_year > 2000`: The book's publication year must be after 2000.
  - `(.details.topics | index("Data Science")) or .ratings.average >= 4.5`: The book must either have "Data Science" as one of the topics or have an average rating of at least 4.5. The `index("Data Science")` function checks for the presence of "Data Science" in the topics array, and `.ratings.average >= 4.5` checks if the average rating is 4.5 or higher.

- `| {title: .title, first_author: .authors[0], publication_year: .details.publication_year, average_rating: .ratings.average}`: This pipe transforms the filtered books into new objects that include only the title, the first author, the publication year, and the average rating.
